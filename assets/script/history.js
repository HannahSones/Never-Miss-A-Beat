
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
    console.log("displayHistory:", searchHistory);
    $("#searchHistory").empty();
    $("#searchHistory").append("<h4>").text("Search History");
    let ulElement = $("<div>").addClass("collection-item");
    searchHistory.forEach((item, index) => {
        let searchItem = $("<a>").attr({
            class: "collection-item searchItems",
            id: "list" + index
        })
            .text(item.name);
        ulElement.prepend(searchItem);
    })
    $("#searchHistory").append(ulElement);
};
