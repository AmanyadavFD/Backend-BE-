require("../db");
const express = require("express");
const app = express();
app.use(express.json());

const Recipe = require("./models/recipe.models");
console.log("Connect to database");

async function createRecipe(newRecipeData) {
  try {
    const newRecipe = new Recipe(newRecipeData);
    const saveRecipe = await newRecipe.save();
    return saveRecipe;
  } catch (error) {
    console.log(error);
  }
}
app.post("/recipes", async (req, res) => {
  try {
    const seedRecipeData = await createRecipe(req.body);
    if (seedRecipeData) {
      res.status(201).json({
        message: "Recipe added successfully",
        seedRecipeData: seedRecipeData,
      });
    } else {
      res.status(404).json({ error: "Failed to added recipe" });
    }
  } catch (error) {
    res.status(505).json({ error: "Failed to added the recipe. " });
  }
});

async function getAllRecipe() {
  try {
    const allRecipe = await Recipe.find();
    return allRecipe;
  } catch (error) {
    console.log(error);
  }
}
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await getAllRecipe();
    if (recipes.length != 0) {
      res
        .status(201)
        .json({ message: "Here is your all recipes", recipes: recipes });
    } else {
      res.status(404).json({ error: "Recipe not found." });
    }
  } catch (error) {
    res.status(505).json({ error: "Failed to get all  the Recipe. " });
  }
});

async function getRecipeByTitle(title) {
  try {
    const recipeTitle = await Recipe.findOne({ title: title });
    console.log(recipeTitle);
    return recipeTitle;
  } catch (error) {
    console.log(error);
  }
}
app.get("/recipes/:title", async (req, res) => {
  try {
    const recipeTitle = await getRecipeByTitle(req.params.title);
    if (recipeTitle) {
      res
        .status(201)
        .json({ message: "Recipe by title", recipeTitle: recipeTitle });
    } else {
      res.status(404).json({ error: "Failed to fetch by recipe title" });
    }
  } catch (error) {
    console.log(error);
  }
});
// author: 'Sanjeev Kapoor',
async function getRecipeByAuthor(data) {
  try {
    const byAuthor = await Recipe.findOne({ author: data });

    return byAuthor;
  } catch (error) {
    console.log(error);
  }
}
// getRecipeByAuthor("Sanjeev Kapoor");
app.get("/recipes/:author", async (req, res) => {
  try {
    const getAuthor = await getRecipeByAuthor(req.params.author);
    if (getAuthor) {
      res
        .status(201)
        .json({ message: " Recipe By Author,", authorData: getAuthor });
    } else {
      res.status(404).json({ error: "Failed to fetch by recipe author" });
    }
  } catch (error) {
    console.log(error);
  }
});

async function getAllRecipeByDifficulty(data) {
  try {
    const byDifficulty = await Recipe.find({ difficulty: data });
    // console.log(byDifficulty);
    return byDifficulty;
  } catch (error) {
    console.log("Error fetching recipes by difficulty:", error);
  }
}

getAllRecipeByDifficulty("Easy");

app.get("/recipes/difficulty/:difficultyType", async (req, res) => {
  try {
    const getDifficulty = await getAllRecipeByDifficulty(
      req.params.difficultyType
    );
    if (getDifficulty) {
      res.status(200).json({
        message: "Recipe by difficulty",
        getDifficulty: getDifficulty,
      });
    } else {
      res.status(404).json({ error: "Failed to fetch by recipe difficulty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

async function updateDifficultyLevel(recipeId, updatToData) {
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(recipeId, updatToData, {
      new: true,
    });
    // console.log(updateRecipe);
    return updateRecipe;
  } catch (error) {
    console.log("Error updating recipe difficulty:", error);
  }
}

app.post("/recipes/difficulty/:recipeId", async (req, res) => {
  try {
    const updatedData = await updateDifficultyLevel(
      req.params.recipeId,
      req.body
    );
    if (updatedData) {
      res
        .status(201)
        .json({ message: "Recipe data updated", updatedData: updatedData });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(505).json({ error: "Failed to update Recipe." });
  }
});

async function updatedByTitle(title, updateData) {
  try {
    const recipeTitle = await Recipe.findOneAndUpdate(
      { title: title },
      updateData,
      { new: true }
    );

    if (recipeTitle) {
      return recipeTitle;
    } else {
      console.log("Recipe not found");
    }
  } catch (error) {
    console.log("Error updating recipe:", error);
  }
}

app.post("/recipes/title/:recipeTitle", async (req, res) => {
  try {
    const recipeTitle = await updatedByTitle(req.params.recipeTitle, req.body);
    if (recipeTitle) {
      res
        .status(201)
        .json({ message: "Recipe data updated", recipeTitle: recipeTitle });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.log("Error updating recipe:", error);
  }
});

async function deleteRecipeById(recipeId) {
  try {
    const deleteRecipe = await Recipe.findByIdAndDelete(recipeId);
    return deleteRecipe;
  } catch (error) {
    console.log(error);
  }
}
app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    const recipeDelete = await deleteRecipeById(req.params.recipeId);
    if (recipeDelete) {
      res.status(200).json({ message: "Recipe deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Recipe." });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
