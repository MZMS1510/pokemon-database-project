INSERT INTO pokemon_species (name, type1_id, type2_id, base_hp, base_atk, base_def, base_sp_atk, base_sp_def, base_speed) 
VALUES
  ('Bulbasaur', 
   (SELECT id FROM pokemon_types WHERE name = 'Grass'), 
   (SELECT id FROM pokemon_types WHERE name = 'Poison'), 
   45, 49, 49, 65, 65, 45),
  ('Ivysaur', 
   (SELECT id FROM pokemon_types WHERE name = 'Grass'), 
   (SELECT id FROM pokemon_types WHERE name = 'Poison'), 
   60, 62, 63, 80, 80, 60),
  ('Venusaur', 
   (SELECT id FROM pokemon_types WHERE name = 'Grass'), 
   (SELECT id FROM pokemon_types WHERE name = 'Poison'), 
   80, 82, 83, 100, 100, 80),
  ('Charmander', 
   (SELECT id FROM pokemon_types WHERE name = 'Fire'), 
   NULL, 
   39, 52, 43, 60, 50, 65),
  ('Charmeleon', 
   (SELECT id FROM pokemon_types WHERE name = 'Fire'), 
   NULL, 
   58, 64, 58, 80, 65, 80);

INSERT INTO pokemon (species_id, level, nickname, hp, atk, def, sp_atk, sp_def, speed, exp, shiny) 
VALUES
  ((SELECT id FROM pokemon_species WHERE name = 'Bulbasaur'), 
   5, 'Bulby', 45, 49, 49, 65, 65, 45, 0, FALSE),
  ((SELECT id FROM pokemon_species WHERE name = 'Ivysaur'), 
   10, 'Ivy', 60, 62, 63, 80, 80, 60, 0, FALSE),
  ((SELECT id FROM pokemon_species WHERE name = 'Venusaur'), 
   15, 'Venus', 80, 82, 83, 100, 100, 80, 0, FALSE);
