# Never Miss A Beat
## Description
Never Miss A Beat is an application where users can search for their favourite music and see upcoming live events based on their search history.

ADD LOGO HERE

#### User story
**AS A** live music fan,   
**I WANT** an app that I can search for music and see when my favourite artists are touring,   
**SO THAT** I never miss my favourite bands playing live

**Target audience:** young adults in the UK

#### Motivation
A survey by Music Venue Trust found that 89% of people in the UK were eager to return to live music. Live events are not something that will disappear as a result of COVID-19, but instead they will adapt and transform, offering a new and unmissable experience. To capture the surge in demand when events return to the UK, our application will be ready to make sure users Never Miss A Beat. Users will be able to search for their favourite music and see upcoming live events from those artists all in one place with a direct link to get tickets.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Credits](#credits)
* [Usage](#usage)
* [Further Development](#further-development)
* [Link to application](#link-to-deployed-application)
* [License](License)

----------

## About the project
Never Miss A Beat is a simple application powered by JavaScript & jQuery and uses third-party API's to pull the required data into the browser updating the HTML and CSS dynamically. When a user searches for an artists, they are presented with their top tracks as well as any upcoming events for that artist in the UK. Any searches are saved in local storage and populate a search history element which users can click to revisit previous searches. We have also added a clear search history button to improve the user experience. This empties the values saved in local storage as well as automatically refreshing the page so the user has a clean interface.

The CSS framework used is Google's Materialize. This has helped make the application fully responsive for mobile, but some media queries have been added to enhance the experience futher.

## Built using
* JavaScript
* jQuery
* HTML
* CSS
* Materialise framework
* Last.fm API
* AudioDB API
* Ticketmaster Discovery API

----------

## Credits
Contributors to this repository include:
* @HannahSones
* @markleonard84
* @PavN93

We'd also like to credit the third-party assets that have made this application possible.
* [Last.fm API](https://www.last.fm/api)
* [AudioDB API](https://www.theaudiodb.com/api_guide.php)
* [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* [YouTube](https://www.youtube.com/)

---------------

## Usage
#### What does the app do?
On loading, the Never Miss A Beat application presents the user with a clean, polished interface displaying the current top 10 tracks in the UK. The user then has the opportuntity to search for an artist they like to find information on their tracks and upcoming events.   
The application fetches data from three separate API's - last.fm, Ticketmaster Discovery and AdioDB. It then writes the selected data onto specific elements of the page. Searched artists, if found successfully, are stored in local storage and appended in a previous searches list on the screen so these can be revisited. A clear history button clears the whole search history as well as current search results.  
When a search is carried out, a collection of that artist's top tracks are appended as well as the top YouTube video which is playable in the browser. An event carousel also appears underneath giving users the ability to swipe through each upcoming event.

*Homepage - mobile and desktop version*
ADD IMAGE OF HOMEPAGE

The application is designed with mobile-first in mind and you can see this by the subtle changes in display when comparing mobile viewing and desktop viewing side-by-side.

*Example search results*
ADD IMAGE

If the artist name is incorrect or information cannot be found, the user will be presented with an error message.

*Error message*
ADD IMAGE


-------------
## Further Development
Moving forward with this application, there are three areas we'd like to develop to make it more user-friendly and improve the user experience.
* **Player**
Create an interface where the user can listen to a track in the app and use interactive controls such as pause, next and shuffle to make the experience more immersive.
* **Login option**
Being able to create an account within the application would allow users to add friends, share music and join events to create a community feel.
* **Personalised UI**
Instead of the current UK top 10 displaying on page load, if the user signs in, we would want to display suggested music and events based on their recent search history and favourite artists

--------------
## Link to deployed application
https://github.com/PavN93/Never-Miss-A-Beat

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

-------------

Never Miss A Beat © 2020. All rights reserved.
