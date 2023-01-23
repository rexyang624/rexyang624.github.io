function checkSidebar(){
  var menu = document.getElementById("menubar");
  var button = document.getElementById("hide-btn");
  if (menu.style.left === "-200px") {
    menu.style.left = "0px";
  } else {
    menu.style.left = "-200px";
  }
}