
exports.up = function(knex) {
   return knex.schema

     .createTable("recipes", (tbl) => {
       tbl.increments("id");
       tbl.string("recipe_name").unique().notNullable();
       tbl.timestamp("created_at").defaultTo(knex.fn.now());
     })

     .createTable("ingredients", (tbl) => {
       tbl.increments("ingredient_id");
       tbl.string("ingredient_name").notNullable();
     })

     .createTable("steps", (tbl) => {
       tbl.increments("step_id");
       tbl.integer("step_number").notNullable();
       tbl.string("step_instructions").notNullable();
       tbl
         .integer("recipe_id")
         .unsigned()
         .notNullable()
         .references("recipe_id")
         .inTable("recipes")
         .onDelete("RESTRICT")
         .onUpdate("RESTRICT");
     })

     .createTable("step_ingredients", (tbl) => {
       tbl.increments("step_ingredient_id")
       tbl.integer("amount", 128);
       tbl
         .integer("recipe_id")
         .unsigned()
         .notNullable()
         .references("recipe_id")
         .inTable("recipes")
         .onDelete("RESTRICT")
         .onUpdate("RESTRICT");
        tbl
          .integer("step_id")
          .unsigned()
          .notNullable()
          .references("step_id")
          .inTable("steps")
          .onDelete("RESTRICT")
          .onUpdate("RESTRICT");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("ingredient_id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("RESTRICT");
     })
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
