exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredients").insert([
        { recipe_id: 1, step_id: 2, ingredient_id: 1, amount: 1.5 },
        { recipe_id: 1, step_id: 2, ingredient_id: 5, amount: 4 },
        { recipe_id: 1, step_id: 3, ingredient_id: 2, amount: 7 },
        { recipe_id: 1, step_id: 3, ingredient_id: 6, amount: 1 },
        { recipe_id: 1, step_id: 5, ingredient_id: 3, amount: 14 },
        { recipe_id: 1, step_id: 7, ingredient_id: 4, amount: 2 },
      ]);
    });
};
