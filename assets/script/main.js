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

$(".upcomingEventsTitle").hide();
$("#eventCarousel").hide();

// Search Button event listener
$(searchBtn).on("click", function(event) {
    event.preventDefault();
    $(displayTrackSearchError).empty();
    if ((searchInputText.val().replace(/ /g, "")) < 1) {
        $(displayTrackSearchError).text("Input field cannot be empty")
    } else {
        constructLastFmURL(resultsLimit, lastfmAPIkey);
        setToLocalStorage(searchInputText.val());
        hideTopTenAnim();
        animateHideResults();
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
    hideTopTenAnim();
    animateHideResults();
    constructLastFmURL(resultsLimit, lastfmAPIkey);
    setToLocalStorage(searchInputText.val())
});

// Clear history
$("#searchHistory").on("click", "[data-history='clear']", function(event) {
    event.preventDefault();
    eraseLocalStorage();
});