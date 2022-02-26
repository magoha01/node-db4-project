const express = require("express");
const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

router.get("/:id", (req, res, next) => {
  Recipes.getRecipeById()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
