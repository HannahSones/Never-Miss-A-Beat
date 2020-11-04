
// Construct URL for LastFM API
function constructLastFmURL(resultsLimit, apiKey) {
    const trackName = searchInputText.val().replace(/ /g, "");
    const searchForTrackURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${apiKey}&format=json&limit=${resultsLimit}`;
    getSearchResults(searchForTrackURL, constructAudioDBSearchURL, searchInputError);
};

// Input length check failure or no results
function searchInputError() {
    console.log("Input error, no match found or name misspelled.");
}

// Construct URL for AudioDB API
function constructAudioDBSearchURL(lastFmObject) {
    const lastFmTracks = lastFmObject.results.trackmatches.track;
    const relevantArtist = lastFmTracks[0].artist.split(' ').join('+');
    const relevantTrack = lastFmTracks[0].name.split(' ').join('+');
    console.log("Artist: ", relevantArtist, "track:", relevantTrack);
    const audioDbUrl = `https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=${relevantArtist}&t=${relevantTrack}`;
    console.log(audioDbUrl);
    getSearchResults(audioDbUrl, eventSearchURL, searchForVidError)
    writeResultsToDoc(lastFmTracks);
};

// No results for youtube video
function searchForVidError() {
    console.log("No youtube video found");
};

// Video search for most relevant search
function embedYtVideo() {
    console.log();
};

// Write searched tracks onto document
function writeResultsToDoc(lastFmTracks) {
    const presentedResults = $("[data-search='result-list']");
    presentedResults.empty();
    // const searchedTrackList = searchResults.results.trackmatches.track;
    for (let index = 0; index < lastFmTracks.length; index++) {
        const element = lastFmTracks[index];
        presentedResults.append(
            `<li class="collection-item avatar">
                <img src="./assets/images/result-icon.png" alt="cover" class="circle">
                <span class="title">${element.artist}</span>
                <p>${element.name}</p>
                <a href="${element.url}" target="_blank" class="secondary-content"><i class="material-icons">play_arrow</i></a>
            </li>`
        );
    };
};