const currentTimeDisplay = $("[data-time='current']");

// display time
function timeOnPage() {
  $(currentTimeDisplay).text(moment().format('hh:mm:ss'));
};

// update time, date and blocks color every second
function dynamicTime() {
  update = setInterval(function () {
    timeOnPage();
  }, 1000);
};

timeOnPage();
dynamicTime();