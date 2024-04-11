console.log("Testing...")

const recipeData = sessionStorage.getItem("recipeResults");

// Checking whether stored data exists.
if (recipeData) {
  // Parsing the JSON data.
  const data = JSON.parse(recipeData);

  console.log(data);
  console.log(data.meals);
  console.log(data.meals[0]);

  data.meals.forEach(createRecipeCard);

} else {
  console.error("No data found in session storage.");
  window.location.href = "index.html";

}


function createRecipeCard(value, index, array) {
  const recipeCardsDiv = document.querySelector(".recipe-cards");

  // Creating the recipe card div.
  const recipeCardDiv = document.createElement("div");
  recipeCardDiv.classList.add("recipe-card");

  // Creating the image part.
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("recipe-img");

  const imgUrl = value.strMealThumb;
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);

  imgDiv.appendChild(img);
  recipeCardDiv.appendChild(imgDiv);

  // Creating the labels part.
  const labelsDiv = document.createElement("div");
  labelsDiv.classList.add("recipe-labels");

  const title = value.strMeal;
  const titleP = document.createElement("p");
  titleP.classList.add("recipe-title");
  titleP.innerHTML = `${title}`;

  labelsDiv.appendChild(titleP);

  const category = value.strCategory;
  const categoryP = document.createElement("p");
  categoryP.classList.add("recipe-category");
  categoryP.innerHTML = `<span>Category:</span> ${category}`;

  labelsDiv.appendChild(categoryP);

  recipeCardDiv.appendChild(labelsDiv);

  recipeCardsDiv.appendChild(recipeCardDiv)
}

