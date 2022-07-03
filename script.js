"use strict";

// Mobile Nav Bar Link
const mobileNavBar = document.querySelector(".mobile_nav_bar");

// Mobile Nav Ul Link

const DesktopNavBar = document.querySelector("nav");

// Mobile Nav Click Function

const mobileNavBarOpen = () => {
  mobileNavBar.addEventListener("click", () => {
    console.log("Clicked");
    mobileNavBar.classList.toggle("active");
  });
};

mobileNavBarOpen();
