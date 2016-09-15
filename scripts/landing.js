var pointsArray = document.getElementsByClassName('point'); //get points in selling points
var revealPoint = function(point) { // function that applies styles to every point
  point.style.opacity = 1;
  point.style.transform = "scaleX(1) translateY(0)";
  point.style.msTransform = "scaleX(1) translateY(0)";
  point.style.WebkitTransform = "scaleX(1) translateY(0)"
};

var animatePoints = function(points) { //injecting parameter where would animate every point

    forEach(points, revealPoint)
  
}

// animatePoints();

window.onload = function() {

  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener('scroll', function(event) { // this is the event handler also known as callback
    if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }

    if(window.innerHeight > 950) {
      animatePoints(pointsArray);
    }
    //get the distance in pixels from the window to the top of the container
    // console.log('current offset from the top is' + sellingPoints.getBoundingClientRect().top + 'pixels')
    // var sellingPoints = document.querySelector(".selling-points"); another way to use it without the need of [0] getElementsByClassName
  });

}
