// Creating URL for events search
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
    
    const eventResults = eventData._embedded.events;

    for (eventResult of eventResults) {
            
            let eventImage = eventResult.images[0].url;
            let eventTitle = eventResult.name;
            let eventVenueName = eventResult._embedded.venues[0].name;
            let eventVenueCity = eventResult._embedded.venues[0].city.name;
            let eventDate = eventResult.dates.start.localDate;
            let eventDateUK = new Date(eventDate).toLocaleDateString("en-GB");
            let eventLink = eventResult.url;


            $(".carousel-item").append(
                `<div class="card-image">
                    <img class="eventImage" src="${eventImage}">
                    <span class="card-title eventTitle">${eventTitle}</span>
                  </div>
                  <div class="card-content eventContent">
                    <p>${eventVenueName + ", " + eventVenueCity + "<br />" + eventDateUK}</p>
                  </div>
                  <div class="card-action">
                    <a class="eventAction" href="${eventLink}" target="_blank">Get Tickets</a>
                  </div>`
            );
            
        };
        
    };

    // Note, function is working but carousel is stacking rather than displaying side by side