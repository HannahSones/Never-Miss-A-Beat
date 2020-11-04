// Creating URL for events search
function eventSearchURL(relevantTrackData) {
    const youtubeURL = relevantTrackData.track[0].strMusicVid
    embedYtVideo(youtubeURL);
    const searchedArtist = relevantTrackData.track[0].strArtist;
    const ticketmasterApiKey = "knq7HAEY6x0pW1WzGgOao1TMHDXEoiTR";
    const eventURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketmasterApiKey}&keyword=${searchedArtist}&locale=*&countryCode=GB`;
    console.log("Event search URL:", eventURL);
    getSearchResults(eventURL, showEvents, eventSearchError);
};

// Handle errors during event search
function eventSearchError() {
    $(displayEventSearchStatus).text("The event search service is inoperational.");
};

function noEventsFound() {
    $(displayEventSearchStatus).empty();
    $(displayEventSearchStatus).text("No events found.");
}

// Show events in carousel
function showEvents(eventData) {
    $(".carousel").empty();
    $(displayEventSearchStatus).empty();
    const eventsPresent = eventData._embedded;
    if (eventsPresent === undefined) {
        noEventsFound();
    } else {
        const eventResults = eventData._embedded.events;
        for (eventResult of eventResults) {
            let eventImage = eventResult.images[0].url;
            let eventTitle = eventResult.name;
            let eventVenueName = eventResult._embedded.venues[0].name;
            let eventVenueCity = eventResult._embedded.venues[0].city.name;
            let eventDate = eventResult.dates.start.localDate;
            let eventDateUK = new Date(eventDate).toLocaleDateString("en-GB");
            let eventLink = eventResult.url;
            $(".carousel").append(
                `<div class="carousel-item">
                    <div class="card">
                        <div class="card-image">
                            <img src="${eventImage}">
                            <span class="card-title">${eventTitle}</span>
                        </div>
                        <div class="card-content">
                                <p>${eventVenueName}, ${eventVenueCity}, ${eventDateUK}</p>
                        </div>
                        <div class="card-action">
                            <a href="${eventLink}" target="_blank">Get tickets</a>
                        </div>
                    </div>
                </div>`
            );
            $('#eventCarousel').carousel();
        }
    }
};