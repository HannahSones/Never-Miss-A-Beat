let searchHistoryArray = [];

function getTrackName(searchInputText) {
    let trackName = $("#input_text").val()

    setToLocalStorage(trackName);
}

function setToLocalStorage(trackSearch) {
    const trackName = trackSearch.replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    })
    if (searchHistoryArray.indexOf(trackName) === -1) {
        searchHistoryArray.push(trackName);
        localStorage.setItem("searchHistoryArray", JSON.stringify(searchHistoryArray));
    }
};

function getFromLocalStorage() {
    let storedSearchHistoryArray = JSON.parse(localStorage.getItem("searchHistoryArray"));

    if (storedSearchHistoryArray) {
        searchHistoryArray = storedSearchHistoryArray;
    }
}

function displaySearchHistory() {
    $("#searchHistory").empty();
    $("#searchHistory").append("<h4>").text("Search History");
    let ulElement = $("<div>").addClass("collection-item");
    searchHistoryArray.forEach((item, index) => {
        let searchItem = $("<a>").attr({
                class: "collection-item searchItems",
                id: "list" + index
            })
            .text(item);
        ulElement.append(searchItem);
    })
    $("#searchHistory").append(ulElement);
}


getFromLocalStorage();