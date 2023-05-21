import $ from "jquery";
import Swiper, { Navigation } from "swiper";

$(document).ready(function () {
  let menuOpen = false;

  $(".menu-button").click(function () {
    if (!menuOpen) {
      $(".menu-list").animate({ top: "80px" }, 300);
      menuOpen = true;
    } else {
      $(".menu-list").animate({ top: "-200vh" }, 300);
      menuOpen = false;
    }
  });

  //pictures
  $(".picture").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  });

  //accordion
  $(".accordion").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
    $(this).find(".accordion-description").slideToggle(300);
    $(this).siblings().find(".accordion-description").slideUp(300);
  });

  var swiper = new Swiper(".photos", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
