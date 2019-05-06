//import "./picturefill.min";

"use strict";

// Открытие/закрытие основного меню
var mainMenu = document.querySelector(".js-main-nav");
var showMainMenu = document.querySelector(".js-toggle");

mainMenu.classList.remove("main-nav--nojs");

showMainMenu.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (mainMenu.classList.contains("main-nav--closed")) {
    mainMenu.classList.add("main-nav--opened");
    mainMenu.classList.remove("main-nav--closed");
  } else {
    mainMenu.classList.remove("main-nav--opened");
    mainMenu.classList.add("main-nav--closed");
  }
});
