const db = require("../data/db-config.js");

const getRecipes = () => {
  return db("recipes");
};

const getRecipeById = (recipe_id) => {
  return db("recipes").where("recipe_id", recipe_id).first()
};

module.exports = {
  getRecipes,
  getRecipeById,
};

// select  step_number, step_instructions, i.ingredient_name
// from steps as s
// left join step_ingredients as si on si.step_id = s.step_id
// left join ingredients as i on i.ingredient_id = si.ingredient_id
