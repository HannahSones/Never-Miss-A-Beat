// Construct URL for LastFM API
function constructLastFmURL(resultsLimit, apiKey) {
    const trackName = searchInputText.val().replace(/ /g, "");
    const searchForTrackURL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${apiKey}&format=json&limit=${resultsLimit}`;
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


// Construct URL for Top Ten Tracks using LastFM API
function constructTopTenTrackURL() {
    const trackLimit = 10;
    const topTenTracksURL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${lastfmAPIkey}&format=json&limit=${trackLimit}`;
    getTopTenTracks(topTenTracksURL);
};



// Using ajax call to get object for event results
function getTopTenTracks(topTenTracksURL) {
    $.ajax({
        url: topTenTracksURL,
        method: "GET"
    }).then(function(topTenResults) {
        writeTopTenTracks(topTenResults);
    });


    // Write top ten UK tracks onto document on page load
    function writeTopTenTracks(topTenResults) {

        const topTracks = topTenResults.tracks.track;

        $("#top-ten-list").empty();
        $(".topTenTitle").show();


        for (topTrack of topTracks) {

            let trackArtist = topTrack.artist.name;
            let trackName = topTrack.name;
            let trackURL = topTrack.url;

            $("#top-ten-list").append(
                `<li class="collection-item avatar">
                <img src="./assets/images/result-icon.png" alt="cover" class="circle">
                <span class="title">${trackArtist}</span>
                <p>${trackName}"</p>
                <a href="${trackURL}" target="_blank" class="secondary-content"><i class="material-icons">play_arrow</i></a>
                </li>`
            );
        };
    }
};