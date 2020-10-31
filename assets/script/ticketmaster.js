// Creating link for events search
function eventSearchURL() {

    const ticketmasterApiKey = "knq7HAEY6x0pW1WzGgOao1TMHDXEoiTR"
    // const todaysDate = moment().format();
    // const sixMonthsLater = moment(todaysDate).add(6, "months");
    const searchedArtist = $("#input_text").val();
    
    const eventURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=" + ticketmasterApiKey + "&keyword=" + searchedArtist + "&locale=*&countryCode=GB";
    console.log("Event search URL", eventURL);

    getEventResults(eventURL);
};


// Using ajax call to get object for event results
function getEventResults(eventURL) {
    console.log("Events URL requested");

    $.ajax({
    url : eventURL,
    method: "GET"
    }).then(function (eventData) {
        showEvents(eventData);
        $("#artistNotFound").hide();
    }).catch(function (error) {
        console.log("Request failed: artist not found");
        $("#artistNotFound").show();
    });
};


// Show events in carousel
function showEvents(eventData) {
    console.log("Event search results ", eventData);

    let eventImage = eventData._embedded.events[0].images[0].url;
    console.log("Event image ", eventImage);
    let eventTitle = eventData._embedded.events[0].name;
    console.log("Event title ", eventTitle);
    let eventVenueName = eventData._embedded.events[0]._embedded.venues[0].name;
    console.log("Event venue name ", eventVenueName);
    let eventVenueCity = eventData._embedded.events[0]._embedded.venues[0].city.name;
    console.log(eventVenueCity);
    let eventDate = eventData._embedded.events[0].dates.start.localDate;
    console.log(eventDate);
    let eventLink = eventData._embedded.events[0].url;
    console.log(eventLink);

    $(".card-image").attr("src", eventImage);
    $(".card-title").text(eventTitle);
    $(".card-content").text(eventVenueName + eventVenueCity + eventDate);
    $(".card-action").text(eventLink)

};