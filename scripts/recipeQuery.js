const searchBar = document.querySelector("#searchbar");

// Functions that handles the 'Enter' key press.
function handleEnterKeyPress(event) {
  // Checking whether the key pressed is the enter key.
  if (event.key === "Enter") {
    console.log("Enter key clicked.");
  }
}

function searchRecipes(search) {
  const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  console.log(apiURL);

  fetch(apiURL).then(response => {
    // Checking whether the response was successful.
    if (!response.ok) {
      throw new Error("Network response not ok.");
    }
    // Parsing the JSON response.
    return response.json();
  }).then(data => {
    // Storing the fetched data in session storage.
    sessionStorage.setItem("recipeResults", JSON.stringify(data));
    sessionStorage.setItem("query", search);

    // Redirecting to the recipe list page.
    window.location.href = "recipeList.html";

  }).catch(error => {
    // Handling any errors that occurred during the fetch.
    console.error("A problem occurred during the fetch operation:", error);
  });
}

// The key press is only valid if there has been a search.
searchBar.addEventListener("change", () => {
  // Removing the event listener for the Enter key press if it was previously added.
  document.removeEventListener("keypress", handleEnterKeyPress);

  // Adding the event listener if the search bar value changes.
  document.addEventListener("keypress", handleEnterKeyPress);

  console.log("Search bar value changed.");

  searchRecipes(searchBar.value);
});