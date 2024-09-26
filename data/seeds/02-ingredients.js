
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "cherry tomatoes" , ingredient_measurement: "lbs"},
        { ingredient_name: "feta cheese" , ingredient_measurement: "oz"},
        { ingredient_name: "orecchiette pasta", ingredient_measurement: "oz" },
        { ingredient_name: "basil" , ingredient_measurement: "oz"},
        { ingredient_name: "olive oil" , ingredient_measurement: "tbs"},
        { ingredient_name: "red pepper flakes" , ingredient_measurement: "tsp" },
      ]);
    });
};
