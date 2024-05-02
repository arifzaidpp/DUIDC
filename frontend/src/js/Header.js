// window.onload = function () {
//   const anchorTags = document.querySelectorAll("a");
//   anchorTags.forEach(function (a) {
//     a.addEventListener("click", function (ev) {
//       ev.preventDefault();
//     });
//   });
//   const dropdownEl = document.querySelector("[data-dropdown-toggle]");
//   if (dropdownEl) {
//     dropdownEl.click();
//   }
//   const modalEl = document.querySelector("[data-modal-toggle]");
//   if (modalEl) {
//     modalEl.click();
//   }
//   const dateRangePickerEl = document.querySelector("[data-rangepicker] input");
//   if (dateRangePickerEl) {
//     dateRangePickerEl.focus();
//   }
//   const drawerEl = document.querySelector("[data-drawer-show]");
//   if (drawerEl) {
//     drawerEl.click();
//   }
// };


// scroll animation

window.onscroll = myScroll;
var counter = 0; // Global Variable
function myScroll() {
  var val = document.getElementById("nav");
  if (counter == 0) { // if counter is 1, it will not execute
    if (window.pageYOffset > 100) {
      scrollViewFunction()
      counter++; // increment the counter by 1, new value = 1
    }
  }
}

//   window.onscroll = function() {scrollFunction()};


//   var nav = document.getElementById("nav");

//   $(window).on('scroll',function() {
//     // After Stuff

//     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
//        nav.classList.remove("fixed-top");
//        nav.setAttribute("id", "navbar");
//     } else {
//        nav.classList.add("fixed-top");
//        nav.removeAttribute("id", "navbar");
//     }
//   $(window).off('scroll');
//  });

// document.addEventListener("scroll", function() {
//   const distanceFromTop = Math.abs(
//     document.body.getBoundingClientRect().top
//   );
//   const navbarHeight = 100;
//   const navbar = document.querySelector(".navbar");
//   const logo = document.querySelector(".logo")
//   if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top"), logo.classList.add("fixed-top");
//   else navbar.classList.remove("fixed-top"), logo.classList.remove("fixed-top");
// });

// window.onscroll = function() {scrollFunction()};

function scrollViewFunction() {
  document.addEventListener("scroll", function () {
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
    const navbarHeight = 200;
    const navbar = document.querySelector(".navbar");
    const navBot = document.querySelector(".navBot");
    const logo = document.querySelector(".logo");
    if (distanceFromTop >= navbarHeight) {
      navbar.classList.add("fixed-top");
      navbar.setAttribute("id", "navbar");
      logo.classList.add("fixed-top");
      navBot.classList.add("fixed-top");
      navBot.setAttribute("id", "navbar");
    }
    else {
      logo.classList.remove("fixed-top");
      navBot.classList.remove("fixed-top");
      navbar.classList.remove("fixed-top");
    }
  });
}