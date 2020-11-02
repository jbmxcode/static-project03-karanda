window.onload = init;
var topnavButton = document.getElementById('sitenav_main_mobile_toggle');
var topnavDisplay = document.querySelector('.site-header__navigation');

function init() {
    topnavButton.onclick = toggleNav;
}

function toggleNav(){
  topnavDisplay.classList.toggle("open");
  topnavButton.classList.toggle("open");
}  