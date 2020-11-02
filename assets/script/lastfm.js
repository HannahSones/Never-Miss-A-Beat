
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
    for (let index = 0; index < searchedTrackList.length; index++) {
        const element = searchedTrackList[index];
        presentedResults.append(
            `<li class="collection-item avatar">
                <img src="./assets/images/result-icon.png" alt="cover" class="circle">
                <span class="title">${element.artist}</span>
                <p>${element.name}</p>
                <a href="${element.url}" class="secondary-content"><i class="material-icons">play_arrow</i></a>
            </li>`
        );
    };
    const artistName = searchResults.results.trackmatches.track[0].artist
    eventSearchURL(artistName);
};