const recipe = JSON.parse(sessionStorage.getItem("selectedRecipe"));

console.log(recipe);

const recipeSection = document.querySelector(".individual-recipe");

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

const btn = recipeSection.querySelector("a");
btn.setAttribute("href", recipe.strYoutube);

const ingredientsUL = recipeSection.querySelector(".ingredients");
// Emptying the list to populate with new items.
ingredientsUL.innerHTML = "";

generateList(ingredientsUL);

const instructionsOL = recipeSection.querySelector(".instructions");
// Emptying the list to populate with new items.
instructionsOL.innerHTML = "";


generateList(instructionsOL, false);


function generateIngredients(list) {
  const items = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      const item = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`]; 
      items.push(`${item} (${measure})`);
    }
  }

  items.forEach((value) => {
    const li = document.createElement("li");
    li.textContent =  value;
    list.appendChild(li);
  });
}

function generateList(list, isIngredients=true) {
  const items = [];

  if (isIngredients) {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        const item = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`]; 
        items.push(`${item} (${measure})`);
      }
    }
  } else {
    const str = recipe.strInstructions;
    const method = str.split(".");

    method.forEach(value => {
      items.push(`${value}.`)
    });
  }

  items.forEach((value) => {
    const li = document.createElement("li");
    li.textContent =  value;
    list.appendChild(li);
  });
}