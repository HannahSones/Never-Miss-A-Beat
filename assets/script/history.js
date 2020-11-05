
// Update history in local storage
function setToLocalStorage(relevantTrackData) {
    const searchedArtist = relevantTrackData.track[0].strArtist;
    const idForStorage = relevantTrackData.track[0].idArtist;
    searchHistory = getFromLocalStorage();
    const searchResult = {
        name: searchedArtist,
        id: idForStorage
    };
    searchHistory = searchHistory.filter(item => item.id !== idForStorage);
    if (searchHistory.length > 0 && searchHistory.length < 8) {
        searchHistory.push(searchResult);
    } else if (searchHistory.length >= 8) {
        searchHistory.shift();
        searchHistory.push(searchResult);
    } else {
        searchHistory.push(searchResult);
    }
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    displaySearchHistory(searchHistory);
};

// Load from local storage
function getFromLocalStorage() {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (searchHistory && Array.isArray(searchHistory) && searchHistory.length >= 1) {
        return searchHistory;
    }
    return [];
};

// Display history in the app
function displaySearchHistory() {
    searchHistory = getFromLocalStorage();
    if (searchHistory.length == 0) {
        $("#searchHistory").empty();
        $("#searchHistory").append(
            `<tr><td class="center">No results here!</td></tr>`
        )
    } else {
        $("#searchHistory").empty();
        searchHistory.forEach((item) => {
            $("#searchHistory").prepend(
                `<tr><td class="center"><a href="#">${item.name}</a></td></tr>`
            )
        })
    }
};
