// Construct URL for LastFM API
function constructLastFmURL(resultsLimit, apiKey) {
    const trackName = searchInputText.val().replace(/ /g, "");
    const searchForTrackURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${apiKey}&format=json&limit=${resultsLimit}`;
    getSearchResults(searchForTrackURL, constructAudioDBSearchURL, searchInputError);
};

// Input length check failure or no results
function searchInputError() {
    $(presentedResults).empty();
    presentedResults.append(
        "<h4>The track search service is out of order, please try again later.</h4>"
    )
};

// Write searched tracks onto document
function writeResultsToDoc(lastFmTracks) {
    $(presentedResults).empty();
    for (let index = 0; index < lastFmTracks.length; index++) {
        const element = lastFmTracks[index];
        presentedResults.append(
            `<li class="collection-item avatar">
                <img src="./assets/images/result-icon.png" alt="cover" class="circle">
                <span class="title">${element.artist}</span>
                <p>${element.name}</p>
                <a href="${element.url}" target="_blank" class="secondary-content"><i class="material-icons">play_arrow</i></a>
            </li>`
        )
    }
};