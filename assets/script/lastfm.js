
// Get URL for ajax
function constructTrackSearchURL(resultsLimit, apiKey) {
    const trackName = searchInputText.val().replace(/ /g, "");
    const searchForTrackURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${apiKey}&format=json&limit=${resultsLimit}`;
    console.log(searchForTrackURL);
    getSearchResults(searchForTrackURL);
};

// Fill results cards
function writeResultsToDoc(searchResults) {
    const presentedResults = $("[data-search='result-list']");
    presentedResults.empty();
    const searchedTrackList = searchResults.results.trackmatches.track;
    console.log(searchedTrackList);
    for (let index = 0; index < searchedTrackList.length; index++) {
        const element = searchedTrackList[index];
        let result = $("<li>", { "class": "collection-item avatar" });
        result = result.append($("<img>", { "src": "./assets/images/result-icon.png", "alt": "cover", "class": "circle" }));
        result = result.append($("<span>", { "class": "title" }).text(element.artist));
        result = result.append($("<p>").text(element.name));
        result = result.append($("<a>", { "href": element.url, "class": "secondary-content", "target": "_blank" }).append($("<i>", { "class": "material-icons" }).text("play_arrow")));
        presentedResults.append(result);
    };
    const artistName = searchResults.results.trackmatches.track[0].artist
    eventSearchURL(artistName);
};
