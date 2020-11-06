const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61";
const presentedResults = $("[data-search='result-list']");
const displayTrackSearchError = $("#error-message");
const displayEventSearchStatus = $("[data-status='event-search']");
const vidContainer = $("[data-player='embed-YT']");
const historySearchItem = $("[data-history-result]");
const resultsLimit = 8;

displaySearchHistory();
constructTopTenTrackURL();

// Script for header mobile view
$('.sidenav').sidenav();

// Search Button event listener
$(searchBtn).on("click", function(event) {
    event.preventDefault();
    $(displayTrackSearchError).empty();
    $("#top-ten-list").hide();
    $(".topTenTitle").hide();
    if ((searchInputText.val().replace(/ /g, "")) < 1) {
        $(displayTrackSearchError).text("Input field cannot be empty")
    } else {
        constructLastFmURL(resultsLimit, lastfmAPIkey);
        setToLocalStorage(searchInputText.val())
    }
});

// Get object through ajax
function getSearchResults(queryURL, handleResponse, handleError) {
    $.ajax({
        url: queryURL,
        success: handleResponse,
        error: handleError
    })
};

// History click handler
$("#searchHistory").on("click", "[data-history-result]", function(event) {
    const resultClicked = $(this).text();
    event.preventDefault();
    searchInputText.val(resultClicked);
    $(displayTrackSearchError).empty();
    $("#top-ten-list").hide();
    $(".topTenTitle").hide();
    constructLastFmURL(resultsLimit, lastfmAPIkey);
    setToLocalStorage(searchInputText.val())
});

// Clear history
$("#searchHistory").on("click", "[data-history='clear']", function(event) {
    event.preventDefault();
    eraseLocalStorage();
});