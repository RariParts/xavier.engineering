// jQuery function repsonsible for polyglot greeting on about page
$(document).ready(function(){
  rotation = [
    "beach houses & friends",
    "multi-hyphenate wanderlust",
    "rip curls & flip-flops",
    "\"certified\" ideas dealer",
    "anti-tech technologist",
    "engineer-as-a-service"
  ]

  var i = 0;

  setInterval(function(){
    $('#options').fadeOut(1000, function(){
      $(this).text(rotation[i++ % rotation.length]).fadeIn(1000);
    });
  }, 7000)
});

// showHide
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, menu__item;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="menu__item" and remove the class "active"
  menu__item = document.getElementsByClassName("menu__item");
  for (i = 0; i < menu__item.length; i++) {
    menu__item[i].className = menu__item[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
}
