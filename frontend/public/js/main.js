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