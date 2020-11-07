// Creating URL for events search
function eventSearchURL(relevantTrackData) {
    
    if (relevantTrackData.track !== null) {
        const youtubeURL = relevantTrackData.track[0].strMusicVid;
        embedYtVideo(youtubeURL);
        const searchedArtist = relevantTrackData.track[0].strArtist;
        const ticketmasterApiKey = "knq7HAEY6x0pW1WzGgOao1TMHDXEoiTR";
        const eventURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketmasterApiKey}&keyword=${searchedArtist}&locale=*&countryCode=GB`;
        getSearchResults(eventURL, showEvents, eventSearchError);
        $("#eventCarousel").empty();
        $(displayEventSearchStatus).empty();
        };
};

// Handle errors during event search
function eventSearchError() {
    $(displayEventSearchStatus).empty();
    $(displayEventSearchStatus).text("There was an error.");
};

function noEventsFound() {
    $(displayEventSearchStatus).empty();
    $(displayEventSearchStatus).text("No events found.");
};

// Show events in carousel
function showEvents(eventData) {
    const eventsPresent = eventData._embedded;
    if (eventsPresent === undefined || eventsPresent === null || eventsPresent.length === 0) {
        $(".upcomingEventsTitle").hide();
        $("#eventCarousel").hide();
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

            $(".upcomingEventsTitle").show();
            $("#eventCarousel").show();
        }
    }
};