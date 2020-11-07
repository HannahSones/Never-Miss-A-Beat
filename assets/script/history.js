// Update history in local storage
function setToLocalStorage(searchedPhrase) {
    searchHistory = getFromLocalStorage();
    const searchResult = {
        name: searchedPhrase,
        id: moment().format('YYYY-MM-DD, HH:mm:ss:SS')
    };
    searchHistory = searchHistory.filter(item => item.name !== searchedPhrase);
    if (searchHistory.length > 0 && searchHistory.length < 20) {
        searchHistory.push(searchResult);
    } else if (searchHistory.length >= 20) {
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
        $("#searchHistory").append(
            `<tr><td class="center"><a href="#" data-history='clear'><strong>[Clear history]</strong></a></td></tr>`
        );
        searchHistory.forEach((item) => {
            $("#searchHistory").prepend(
                `<tr><td class="center"><a data-history-result='${item.name}' href="#">${item.name}</a></td></tr>`
            )
        })
    }
};

// Clear local storage
function eraseLocalStorage() {
    localStorage.clear();
    displaySearchHistory();
}