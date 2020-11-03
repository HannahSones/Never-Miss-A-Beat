const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61"


// Load the events carousel
function loadEventsCarousel() {
  $('.carousel').carousel();
};

loadEventsCarousel();


// Get object throgh ajax
function getSearchResults(queryURL, handleResponse) {
  $.ajax({
    url: queryURL
  }).then(function (response) {
    handleResponse(response);
  }).catch(function () {
    console.log("error error");
  })
};

// Search Button event listener
$(searchBtn).on("click", function () {
  constructLastFmURL(8, lastfmAPIkey);
  // eventSearchURL();
  // historySearchBtnClicked();
});

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
