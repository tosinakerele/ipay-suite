function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const contact = document.getElementById("contact");
const services = document.getElementById("services");
const pricing = document.getElementById("pricing");

if (window.location.href.includes("pricing")) {
  pricing.style.color = "#800000";
}

if (window.location.href.includes("service")) {
  services.style.color = "#8000000";
}

if (window.location.href.includes("contact")) {
  contact.style.color = "#800000";
}
