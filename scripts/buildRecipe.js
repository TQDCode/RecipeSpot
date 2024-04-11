const recipe = JSON.parse(sessionStorage.getItem("selectedRecipe"));
const recipeSection = document.querySelector(".individual-recipe");

// Functions builds the recipe.
function buildRecipe() {
  // Updating the image.
  const img = recipeSection.querySelector("img");
  img.setAttribute("src", recipe.strMealThumb);
  img.setAttribute("alt", recipe.strMeal);

  // Updating the title.
  const title = recipeSection.querySelector(".recipe-title");
  title.textContent = recipe.strMeal;

  // Updating the category.
  const category = recipeSection.querySelector(".recipe-category");
  category.innerHTML = `<span>Category:</span> ${recipe.strCategory}`;

  // Updating the button.
  const btn = recipeSection.querySelector("a");
  btn.setAttribute("href", recipe.strYoutube);

  // Updating the ingredients.
  const ingredientsUL = recipeSection.querySelector(".ingredients");
  // Emptying the list to populate with new items.
  ingredientsUL.innerHTML = "";

  generateList(ingredientsUL);

  // Updating the instructions.
  const instructionsOL = recipeSection.querySelector(".instructions");
  // Emptying the list to populate with new items.
  instructionsOL.innerHTML = "";

  generateList(instructionsOL, false);
}


// Functions generates and appends them to the ingredients or instructions.
function generateList(list, isIngredients=true) {
  const items = [];

  if (isIngredients) {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`] && recipe[`strIngredient${i}`].length > 0) {
        const item = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`]; 
        items.push(`${item} (${measure})`);
      }
    }
  } else {
    const str = recipe.strInstructions;
    const method = str.split(".");

    method.forEach(value => {
      if (value.length > 0) {
        items.push(`${value}.`)
      }
    });
  }

  items.forEach((value) => {
    const li = document.createElement("li");
    li.textContent =  value;
    list.appendChild(li);
  });
}

// Building the recipe.
buildRecipe();