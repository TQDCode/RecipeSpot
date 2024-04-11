console.log("Testing...")

const recipeData = sessionStorage.getItem("recipeResults");

// Checking whether stored data exists.
if (recipeData) {
  // Parsing the JSON data.
  const data = JSON.parse(recipeData);

  console.log(data);
  console.log(data.meals);
  console.log(data.meals[0]);

  

} else {
  console.error("No data found in session storage.");
  window.location.href = "index.html";

}


function createRecipeCard() {

}
