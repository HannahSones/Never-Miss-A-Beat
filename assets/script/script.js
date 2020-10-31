// Load the events carousel
function loadEventsCarousel(){
    $('.carousel').carousel();
    };








$( document ).ready(function() {


    loadEventsCarousel();


}); 


$(searchBtn).on("click", function() {
    eventSearchURL
})

// Creating link for events search
function eventSearchURL(artist) {

    const ticketmasterApiKey = "knq7HAEY6x0pW1WzGgOao1TMHDXEoiTR"
    const todaysDate = moment().format();
    const sixMonthsLater = moment(todaysDate).add(6, "months");
    const searchedArtist = $("#input_text").val();
    
    const eventURL = "https://app.ticketmaster.com/discovery/v2/events?apiKey=" + ticketmasterApiKey + "&keyword=" + searchedArtist + "&locale=*&startDateTime=" + todaysDate + "&endDateTime=" + sixMonthsLater + "&countryCode=GB"
    console.log("Event search URL", eventURL);

    getEventResults(eventURL, artist);
};


// Using ajax call to get object for event results
function getEventResults(eventURL, artist) {
    console.log("Events URL requested");

    $.ajax({
    url: eventURL,
    method: "GET"
    }).then(function (artist) {
        showEvents();
        $("#artistNotFound").hide();
    }).catch(function (error) {
        console.log("Request failed: artist not found");
        $("#artistNotFound").show();
    });
};


// Show events in carousel
function showEvents() {
    let eventImage = artist.events.images.url[0];
    let eventTitle = artist.name;
    let eventVenueName = artist.events._embedded.venues.name;
    let eventVenueCity = artist.events._embedded.venues.city;
    let eventDate = artist.events.dates.start.localDate;
    let eventLink = artist.events.url;

    $(".card-image").attr("src", eventImage);
    $(".card-title").text(eventTitle);
    $(".card-content").text(eventVenueName + eventVenueCity + eventDate);
    $(".card-action").text(eventLink)
};