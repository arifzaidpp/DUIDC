// document.addEventListener("scroll", function() {
//     const distanceFromTop = Math.abs(
//       document.body.getBoundingClientRect().top
//     );
//     const navbarHeight = 100;
//     const navbar = document.querySelector(".navbar");
//     const logo = document.querySelector(".logo")
//     if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top"), logo.classList.add("fixed-top");
//     else navbar.classList.remove("fixed-top"), logo.classList.remove("fixed-top");
//   });

//   window.onscroll = function() {scrollFunction()};

//   function scrollFunction() {
//     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//       document.getElementById("navbar").style.top = "0";
//     } else {
//       document.getElementById("navbar").style.top = "-6rem";
//     }
//   }


var $animation = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass(' animated animatedFadeInUp fadeInUp ');
    } else {
      $element.removeClass(' animated animatedFadeInUp fadeInUp ');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');