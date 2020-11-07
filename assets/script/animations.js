
// Animate header 
function showHeader() {
  const headerElement = $("header");
  $(headerElement).animate({
    opacity: 1
  }, 100);
  $(headerElement).addClass("anim-height-norm");
};

// Animate top ten list on page load
function showTopTenResults() {
  const topTenTitle = $(".topTenTitle");
  $(topTenTitle).delay(300).animate({
    opacity: 1
  }, 200, showHeader(), function () {
    $("#top1").addClass("anim-size-norm").animate({
      opacity: 1
    }, 50, showHistoryList(), function() {
      $("#top2").addClass("anim-size-norm").animate({
        opacity: 1
      }, 50, function() {
        $("#top3").addClass("anim-size-norm").animate({
          opacity: 1
        }, 50, function() {
          $("#top4").addClass("anim-size-norm").animate({
            opacity: 1
          }, 50, function() {
            $("#top5").addClass("anim-size-norm").animate({
              opacity: 1
            },50, function() {
              $("#top6").addClass("anim-size-norm").animate({
                opacity: 1
              }, 50, function() {
                $("#top7").addClass("anim-size-norm").animate({
                  opacity: 1
                }, 50, function() {
                  $("#top8").addClass("anim-size-norm").animate({
                    opacity: 1
                  }, 50, function() {
                    $("#top9").addClass("anim-size-norm").animate({
                      opacity: 1
                    }, 50, function() {
                      $("#top10").addClass("anim-size-norm").animate({
                        opacity: 1
                      },50, showFooter())
                    })
                  }) 
                })
              })
            })
          })
        })
      })
    })
  })
};

// Hide top ten on search 
function hideTopTenAnim() {
  hideFooter();
  const topTenContainer = $("#topTenContainer");
  $(topTenContainer).addClass("anim-size-zero");
  $(topTenContainer).fadeOut("fast");
};

// animate history table and show footer
function showHistoryList() {
  const historyTable = $("#history-table");
  $(historyTable).fadeIn("slow");
  $(historyTable).addClass("anim-size-norm");
  showFooter();
};

// functions to show and hide footer to avoid flickering
function hideFooter() {
  $("footer").hide();
};
function showFooter() {
  $("footer").show()
};

// show search results
function animateShowResults() {
  const searchResultsContainer = $("#searchResultsContainer");
  hideFooter();
  $(searchResultsContainer).delay(300).fadeIn("fast", function() {
    $("#result1").addClass("anim-size-norm").animate({
      opacity: 1
    }, 50, showHistoryList(), function() {
      $("#result2").addClass("anim-size-norm").animate({
        opacity: 1
      }, 50, function() {
        $("#result3").addClass("anim-size-norm").animate({
          opacity: 1
        }, 50, function() {
          $("#result4").addClass("anim-size-norm").animate({
            opacity: 1
          }, 50, function() {
            $("#result5").addClass("anim-size-norm").animate({
              opacity: 1
            },50, function() {
              $("#result6").addClass("anim-size-norm").animate({
                opacity: 1
              }, 50, function() {
                $("#result7").addClass("anim-size-norm").animate({
                  opacity: 1
                }, 50, function() {
                  $("#result8").addClass("anim-size-norm").animate({
                    opacity: 1
                  }, 50, function() {
                    $("#result9").addClass("anim-size-norm").animate({
                      opacity: 1
                    }, 50, function() {
                      $("#result10").addClass("anim-size-norm").animate({
                        opacity: 1
                      },50, showFooter())
                    })
                  }) 
                })
              })
            })
          })
        })
      })
    })
  })
}

// Animate search hide on next search 
function animateHideResults() {
  hideFooter();
  const searchResultsContainer = $("#searchResultsContainer");
  $(searchResultsContainer).addClass("anim-size-zero");
  $(searchResultsContainer).fadeOut("fast", function(){
    $(searchResultsContainer).removeClass("anim-size-zero");
  });
};
