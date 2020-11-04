const searchBtn = $("#search-btn");
const searchInputText = $("#input_text");
const lastfmAPIkey = "6a57108ac7001b783396597bbb4b2c61"


// Load the events carousel
function loadEventsCarousel() {
    $('.carousel').carousel();
};

loadEventsCarousel();


// Get object throgh ajax
function getSearchResults(queryURL) {
    $.ajax({
        url: queryURL
    }).then(function(response) {
        writeResultsToDoc(response);
    }).catch(function() {
        console.log("error error");
    })
};

// Search Button event listener
$(searchBtn).on("click", function() {
    constructTrackSearchURL(8, lastfmAPIkey);
    getTrackName(searchInputText);
    displaySearchHistory();


    // eventSearchURL();
    // historySearchBtnClicked();
});