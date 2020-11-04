const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61";

// On page load, hide the artist not found error message
$("#artistNotFound").hide();

// Search Button event listener
$(searchBtn).on("click", function () {
  if ((searchInputText.val().replace(/ /g, "")) < 1) {
    console.log("Input error: empty text area");
  };
  const resultsLimit = 8;
  constructLastFmURL(resultsLimit, lastfmAPIkey);
});

// Get object throgh ajax, applicable for every ajax requests
function getSearchResults(queryURL, handleResponse, handleError) {
  $.ajax({
    url: queryURL
  }).then(function (response) {
    handleResponse(response);
  }).catch(function () {
    handleError();
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


