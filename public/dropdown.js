$(document).ready(function () {
  console.log("drop");
  document.getElementById("apps").innerHTML =  "<i class='icon-laptop'></i> Applications";
  document.getElementById("mech").innerHTML = "<i class='icon-wrench'></i> Mechanics";
  document.getElementById("games").innerHTML = "<i class='icon-gamepad'></i> Games";
  const elementToHide = document.querySelector(".dropdown-content");
  const services = document.querySelector("#projects");
  const service = document.querySelector(".service");
  const dropdownContent = document.querySelector(".dropdown-content");
  let viewed = false;
  let chosen = false;
  dropdownContent.classList.add("hidden");
  $(".dropdown-content").css("display", "block");
  //elementToHide.classList.add("hidden");
  // Add an event listener for the 'transitionend' event
  dropdownContent.addEventListener("transitionend", (event) => {
    const computedStyle = window.getComputedStyle(dropdownContent);
    const maxHeight = computedStyle.getPropertyValue("max-height");

    if (event.propertyName === "max-height" && maxHeight !== "0px") {
      viewed = true;
      console.log("Dropdown content is viewed");
    } else {
      viewed = false;
      console.log("Dropdown content is hidden");
    }
  });

  let isDropdownVisible = false;

  // Event listener for clicking the "Services" link
  
services.addEventListener("touchstart", function (event) {
    console.log("t");
    event.stopPropagation(); // Prevent this click event from propagating to the document
    services.style.backgroundColor = "#555";
    if (isDropdownVisible) {
      // Hide the dropdown
      dropdownContent.classList.add("hidden");
      //services.style.backgroundColor = "#333";
      //$(".dropdown-content").css("display", "none");
      isDropdownVisible = false;
      console.log(isDropdownVisible);
    } else {
      //$(".dropdown-content").css("display", "block");
      dropdownContent.classList.remove("hidden");
      isDropdownVisible = true;
      console.log(isDropdownVisible);
    }
  });
   const serviceElements = document.querySelectorAll(".service");

  // Add event listeners to all "service" elements
  serviceElements.forEach(function (service) {
    service.addEventListener("touchstart", function (event) {
      service.style.backgroundColor = "#555";
    });
  });
  // Event listener to hide the dropdown when clicking anywhere on the document
  document.addEventListener("touchstart", function () {
    if (isDropdownVisible) {
      dropdownContent.classList.add("hidden");
      //services.style.backgroundColor = "#333";
      isDropdownVisible = false;
      console.log(isDropdownVisible);
    }
  });
});
function hidemenu() {
  $(".dropdown-content").css("display", "none");
// Preload the home image

}
window.onpopstate = function (event) {
  // Check if the dropdown should be hidden based on your logic
  console.log("pop");
};
const pageviewsCount = document.getElementById('pageviews-count');
const visitsCount = document.getElementById('visits-count');
let eng = true;
function toggleElements() {
  eng = !eng;
  const element1 = $('.toggle-element', '.visible');
  const element2 = $('.toggle-element');

  // Toggle the visibility of both elements
  element1.toggleClass('visible');
  element2.toggleClass('visible');
  document.getElementById("apps").innerHTML = eng ?  "<i class='icon-laptop'></i> Applications" :  "<i class='icon-laptop'></i> Aplikacje";
  document.getElementById("mech").innerHTML = eng ? "<i class='icon-wrench'></i> Mechanics" :  "<i class='icon-wrench'></i> Mechanika";
  document.getElementById("games").innerHTML = eng ? "<i class='icon-gamepad'></i> Games" :  "<i class='icon-gamepad'></i> Gry";
}

// 'visit' item persists in storage for the remainder of the user session