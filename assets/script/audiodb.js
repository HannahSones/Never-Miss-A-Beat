// Construct URL for AudioDB API
function constructAudioDBSearchURL(lastFmObject) {
    const lastFmTracks = lastFmObject.results.trackmatches.track;
    if (lastFmTracks.length < 1) {
        $(presentedResults).empty();
        presentedResults.append(
            `<li>
                <h4 class="center">Sorry, no results found.</h4>
            </li>`
        )
    } else {
        const relevantArtist = lastFmTracks[0].artist.split(' ').join('+');
        const relevantTrack = lastFmTracks[0].name.split(' ').join('+');
        const audioDbUrl = `https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=${relevantArtist}&t=${relevantTrack}`;
        getSearchResults(audioDbUrl, eventSearchURL, searchForVidError);
        writeResultsToDoc(lastFmTracks);
    }
};