const recipe = JSON.parse(sessionStorage.getItem("selectedRecipe"));

console.log(recipe);

const recipeSection = document.querySelector(".individual-recipe");

// Updating the image.
const img = recipeSection.querySelector("img");
img.setAttribute("src", recipe.strMealThumb);

console.log(img);