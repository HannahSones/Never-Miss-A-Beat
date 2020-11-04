const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61";
const presentedResults = $("[data-search='result-list']");
const displayError = $("#error-message");

// On page load, hide the artist not found error message
$("#artistNotFound").hide();

// Search Button event listener
$(searchBtn).on("click", function () {
  $(displayError).empty();
  $(presentedResults).empty();
  if ((searchInputText.val().replace(/ /g, "")) < 1) {
    $(displayError).text("Input field cannot be empty")
  } else {
    const resultsLimit = 8;
    constructLastFmURL(resultsLimit, lastfmAPIkey);
  }
});

// Get object throgh ajax, applicable for every ajax requests
function getSearchResults(queryURL, handleResponse, handleError) {
  $.ajax({
    url: queryURL,
    success: handleResponse,
    error: handleError
  })
};

//set local storage 
function setLocalStorage() {
  const searchHistory = getFromLocalStorage()
  searchHistory.push( /* val from search variable */)
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};

//get from local storage
function getFromLocalStorage() {
  const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));
  if (storedSearchHistoy && Array.isArray(storedSearchHistory) && storedSearchHistory.length >= 1) {
    return storedSearchHistory;
  }
  return [];
}


