const toTopButton = $("[data-scroll='top']");
const headerWithNav = $("header");
const mainSection = $("section");
const stickyFooter = $("footer")

$(toTopButton).on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 0)
});

$(headerWithNav).fadeIn(800, function() {
  $(mainSection).fadeIn(800, function() {
    $(stickyFooter).fadeIn(500)
  })
});