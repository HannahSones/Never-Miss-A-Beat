// No results for youtube video
function searchForVidError() {
  console.log("No youtube video found");
};

// Video search for most relevant search
function embedYtVideo(youtubeURL) {
  if ((typeof youtubeURL) === "string") {
    const vidID = extractVidIDfromURL(youtubeURL);
    writeYtVidToDoc(vidID);
  } else {
    vidContainer.empty();
  }
};

function writeYtVidToDoc(vidID) {
  // const vidContainer = $("[data-player='embed-YT']");
  vidContainer.empty().append(
    `<iframe width="300" height="200" src="https://www.youtube.com/embed/${vidID}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  )
}

// Video ID is needed to embed youtube iframe
function extractVidIDfromURL(youtubeURL) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = youtubeURL.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}