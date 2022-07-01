"use strict";

// Mobile Nav Bar Link
const mobileNavBar = document.querySelector(".mobile_nav_bar");

// Mobile Nav Ul Link

const mobileNavUl = document.querySelector("nav");

// Mobile Nav Click Function
const mobileNavClick = () => {
  mobileNavBar.addEventListener("click", () => {
    mobileNavUl.classList.remove("active");
    console.log(" clicked");
  });
};
mobileNavClick();
