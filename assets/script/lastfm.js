
// Get URL for ajax
function constructArtistSearchURL(resultsLimit, apiKey) {
    const searchForArtistURL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchInputText.val()}&api_key=${apiKey}&format=json&limit=${resultsLimit}`;
    console.log(searchForArtistURL);
    getSearchResults(searchForArtistURL);
};


