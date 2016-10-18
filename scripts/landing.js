var animatePoints = function() { //injecting parameter where would animate every point


      var revealPoint = function() { // function that applies styles to every point
        $(this).css({
          opacity: 1,
          transform: "scaleX(1) translateY(0)"
        });
      }
      $.each($('.point'), revealPoint);
}

// animatePoints();

$(window).load(function() {

  if($(window).height() > 950) {
    animatePoints();
  }

  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
  // 200 pixeles abajo de selling point

  $(window).scroll(function(event) {
    if($(window).scrollTop() >= scrollDistance) {
      animatePoints();
    }
    //get the distance in pixels from the window to the top of the container
  });

});
