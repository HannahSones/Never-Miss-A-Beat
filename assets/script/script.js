//Search Histor


let searchHistory = [];


//get from local storage
function getFromLocalStorage() {
    const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedSearchHistoy && Array.isArray(storedSearchHistory) && storedSearchHistory.length >= 1) {
        return storedSearchHistory;
    }
    return [];
}

//set local storage 
function setLocalStorage() {
    const searchHistory = getFromLocalStorage()
    searchHistory.push( /* val from search variable */ )
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}
//display search history function
function displaySearchHistory() {
    const getSearchHistory = getFromLocalStorage();


}

//event handler on search history list
// Load the events carousel
function loadEventsCarousel() {
    $('.carousel').carousel();
};



loadEventsCarousel();

