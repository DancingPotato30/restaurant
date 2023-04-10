import "./style.css";
import { printHome } from "./home";
import { printMenu } from "./menu";
import { printContact } from "./contact";

function printManager() {
  printHeader();
  window.addEventListener("load", () => {
    printSwitcher("home");
  });
}

function printHeader() {
  const header = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  header.classList.add("header");
  homeBtn.classList.add("home");
  homeBtn.classList.add("active");
  menuBtn.classList.add("menu");
  contactBtn.classList.add("contact");

  homeBtn.textContent = "HOME";
  menuBtn.textContent = "MENU";
  contactBtn.textContent = "CONTACT";

  homeBtn.addEventListener("click", () => {
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.remove("active");
    printSwitcher("home");
  });
  menuBtn.addEventListener("click", () => {
    homeBtn.classList.remove("active");
    menuBtn.classList.add("active");
    contactBtn.classList.remove("active");
    printSwitcher("menu");
  });
  contactBtn.addEventListener("click", () => {
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.add("active");
    printSwitcher("contact");
  });

  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(contactBtn);
  document.body.insertBefore(header, document.querySelector(".content"));
}

function printSwitcher(state) {
  cleanContent();
  if (state == "home") {
    printHome();
  } else if (state == "contact") {
    printContact();
  } else if (state == "menu") {
    printMenu();
  }
}

function cleanContent() {
  document.querySelector(".content").innerHTML = "";
}

printManager();
