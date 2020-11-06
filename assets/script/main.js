const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61";
const presentedResults = $("[data-search='result-list']");
const displayTrackSearchError = $("#error-message");
const displayEventSearchStatus = $("[data-status='event-search']");
const vidContainer = $("[data-player='embed-YT']");

displaySearchHistory();
constructTopTenTrackURL();

// Script for header mobile view
$('.sidenav').sidenav();

// Search Button event listener
$(searchBtn).on("click", function(event) {
    // event.preventDefault();
    $(displayTrackSearchError).empty();
    $("#top-ten-list").hide();
    $(".topTenTitle").hide();
    if ((searchInputText.val().replace(/ /g, "")) < 1) {
        $(displayTrackSearchError).text("Input field cannot be empty")
    } else {
        const resultsLimit = 8;
        constructLastFmURL(resultsLimit, lastfmAPIkey);
    }
});

// Get object through ajax, applicable for every ajax requests
function getSearchResults(queryURL, handleResponse, handleError) {
    $.ajax({
        url: queryURL,
        success: handleResponse,
        error: handleError
    })
};