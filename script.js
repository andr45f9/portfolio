"use strict";

const menuBtn = document.querySelector(".menu_btn");
let menuOpen = false;

const menuLinks = document.querySelector(".burger_nav");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuLinks.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuLinks.classList.remove("open");
    menuOpen = false;
  }
});
