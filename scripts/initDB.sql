CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS pokemon_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS pokemon_species (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pokedex_id SERIAL UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  type1_id UUID NOT NULL,
  type2_id UUID,
  base_hp INT NOT NULL,
  base_atk INT NOT NULL,
  base_def INT NOT NULL,
  base_sp_atk INT NOT NULL,
  base_sp_def INT NOT NULL,
  base_speed INT NOT NULL,
  next_stage_id UUID,

  FOREIGN KEY (type1_id) REFERENCES pokemon_types(id) ON DELETE CASCADE,
  FOREIGN KEY (type2_id) REFERENCES pokemon_types(id) ON DELETE SET NULL,
  FOREIGN KEY (next_stage_id) REFERENCES pokemon_species(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS pokemon (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  species_id UUID NOT NULL,
  level INT NOT NULL,
  nickname VARCHAR(100),
  hp INT NOT NULL,
  atk INT NOT NULL,
  def INT NOT NULL,
  sp_atk INT NOT NULL,
  sp_def INT NOT NULL,
  speed INT NOT NULL,
  exp INT NOT NULL,
  shiny BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (species_id) REFERENCES pokemon_species(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS trainer (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  money INT NOT NULL DEFAULT 0,
  badges INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS team (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  trainer_id UUID NOT NULL,
  pokemon1_id UUID NOT NULL,
  pokemon2_id UUID NOT NULL,
  pokemon3_id UUID NOT NULL,
  pokemon4_id UUID NOT NULL,
  pokemon5_id UUID NOT NULL,
  pokemon6_id UUID NOT NULL,

  FOREIGN KEY (trainer_id) REFERENCES trainer(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon1_id) REFERENCES pokemon(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon2_id) REFERENCES pokemon(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon3_id) REFERENCES pokemon(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon4_id) REFERENCES pokemon(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon5_id) REFERENCES pokemon(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon6_id) REFERENCES pokemon(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS box (
  trainer_id UUID NOT NULL,
  pokemon_id UUID NOT NULL,
  PRIMARY KEY (trainer_id, pokemon_id),
  FOREIGN KEY (trainer_id) REFERENCES trainer(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS item_category (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS item_type (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  effect TEXT,
  category UUID NOT NULL,
  FOREIGN KEY (category) REFERENCES item_category(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS item (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL,
  type_id UUID NOT NULL,
  FOREIGN KEY (type_id) REFERENCES item_type(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES trainer(id) ON DELETE CASCADE
);