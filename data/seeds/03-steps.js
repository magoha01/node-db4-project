
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "preheat the oven to 425",
          recipe_id: 1,
        },
        {
          step_number: 2,
          step_instructions:
            "In a baking dish, coat the tomatoes in olive oil.",
          recipe_id: 1,
        },
        {
          step_number: 3,
          step_instructions:
            "Place the feta in the middle of the tomatoes; sprinkle with red pepper flakes",
          recipe_id: 1,
        },
        {
          step_number: 4,
          step_instructions: "bake for 45 minutes",
          recipe_id: 1,
        },
        {
          step_number: 5,
          step_instructions:
            " bring a pot of water to a boil. Cook pasta for 10 minutes. Drain.",
          recipe_id: 1,
        },
        {
          step_number: 6,
          step_instructions: "remove tomatoes and feta from oven; mix in pasta",
          recipe_id: 1,
        },
        {
          step_number: 7,
          step_instructions: "Chop basil finely; sprinkle on top. Enjoy!",
          recipe_id: 1,
        },
      ]);
    });
};
