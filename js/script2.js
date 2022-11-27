function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" actived", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " actived";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
