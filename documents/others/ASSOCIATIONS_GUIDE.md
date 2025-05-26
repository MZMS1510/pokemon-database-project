# Guia de Associações do Projeto Pokémon Database

## Aliases das Associações Definidas

### Trainer

- `team` - Equipe do treinador (hasOne Team)
- `boxedPokemon` - Pokémon no box (hasMany Box)
- `items` - Itens do treinador (hasMany Item)

### Team

- `teamOwner` - Treinador dono da equipe (belongsTo Trainer)
- `pokemon1` até `pokemon6` - Pokémon da equipe (belongsTo Pokemon)

### Box

- `boxOwner` - Treinador dono do box (belongsTo Trainer)
- `pokemon` - Pokémon no box (belongsTo Pokemon)

### Pokemon

- `pokemonSpecies` - Espécie do Pokémon (belongsTo PokemonSpecies)
- `boxEntries` - Entradas no box (hasMany Box)

### PokemonSpecies

- `pokemonInstances` - Instâncias de Pokémon (hasMany Pokemon)
- `primaryType` - Tipo primário (belongsTo PokemonTypes)
- `secondaryType` - Tipo secundário (belongsTo PokemonTypes)
- `evolution` - Próxima evolução (belongsTo PokemonSpecies)

### PokemonTypes

- `primarySpecies` - Espécies com este tipo primário (hasMany PokemonSpecies)
- `secondarySpecies` - Espécies com este tipo secundário (hasMany PokemonSpecies)

### Item

- `owner` - Treinador dono do item (belongsTo Trainer)
- `itemType` - Tipo do item (belongsTo ItemType)

### ItemType

- `items` - Itens deste tipo (hasMany Item)
- `itemCategory` - Categoria do item (belongsTo ItemCategory)

### ItemCategory

- `itemTypes` - Tipos de itens nesta categoria (hasMany ItemType)

## Exemplo de Uso nos Controllers

```javascript
// Buscar treinador com equipe completa
const getTrainerWithTeam = async (trainerId) => {
  return await Trainer.findByPk(trainerId, {
    include: [
      {
        association: "team",
        include: [
          { association: "pokemon1" },
          { association: "pokemon2" },
          { association: "pokemon3" },
          { association: "pokemon4" },
          { association: "pokemon5" },
          { association: "pokemon6" },
        ],
      },
    ],
  });
};

// Buscar box com pokémon e seus tipos
const getBoxWithPokemon = async () => {
  return await Box.findAll({
    include: [
      { association: "boxOwner", attributes: ["name"] },
      {
        association: "pokemon",
        include: [
          {
            association: "pokemonSpecies",
            include: [
              { association: "primaryType" },
              { association: "secondaryType" },
            ],
          },
        ],
      },
    ],
  });
};

// Buscar item com tipo e categoria
const getItemWithDetails = async (itemId) => {
  return await Item.findByPk(itemId, {
    include: [
      { association: "owner" },
      {
        association: "itemType",
        include: [{ association: "itemCategory" }],
      },
    ],
  });
};
```

## Foreign Keys Corretas

- **Trainer**: `id` (UUID)
- **Team**: `trainerId`, `pokemon1Id`, `pokemon2Id`, etc.
- **Box**: `trainerId`, `pokemonId`
- **Pokemon**: `species_id`
- **PokemonSpecies**: `type1_id`, `type2_id`, `next_stage_id`
- **Item**: `ownerId`, `typeId`
- **ItemType**: `category`
- **ItemCategory**: `id`
