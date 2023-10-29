const NavDOM = document.querySelector("#nav");
const HeaderDOM = document.querySelector("#header");
const NotificationDOM = document.querySelector("#notification");

let NotificationDOMPosition = NotificationDOM.getBoundingClientRect().top;

function onLoadPage() {
  onLoadHeader();
}

// FUNCTION FOR HANDLE SECTION HEADER ANIMATION
function onLoadHeader() {
  // WIDTH HEADER LEFT - HEADER RIGHT
  HeaderDOM.querySelector(".header-left").style.width = "8%";
  HeaderDOM.querySelector(".header-right").style.width = "92%";
  HeaderDOM.querySelector(".header__main-text").style.transform =
    "translateY(0px)";
  HeaderDOM.querySelector(".header__secondary-text").style.transform =
    "translateY(0px)";
}

// FUNCTION FOR HANDLE SECTION NOTIFICATION
function onLoadNotification() {
  NotificationDOM.querySelector(".notification__main-text").style.transform =
    "translateY(0px)";
  NotificationDOM.querySelector(
    ".notification__secondary-text"
  ).style.transform = "translateY(0px)";
}

// NAV: WHEN SCROLL CHANGE BACKGROUND COLOR AND TEXT COLOR
document.addEventListener("scroll", function () {
  // HANDLE NAV BACKGROUND
  if (window.scrollY > 100) {
    NavDOM.querySelector(".-translate-y-full").style.transform =
      "translateY(0px)";
    const navAnchorDOM = NavDOM.querySelectorAll(".nav-anchor");
    navAnchorDOM.forEach((anchor) => {
      anchor.style.color = "#1E1E1E";
    });
  }
  if (window.scrollY < 100) {
    NavDOM.querySelector(".-translate-y-full").style.transform =
      "translateY(-100%)";
    const navAnchorDOM = NavDOM.querySelectorAll(".nav-anchor");
    navAnchorDOM.forEach((anchor) => {
      anchor.style.color = "#EDEDED";
    });
  }

  if (window.scrollY > NotificationDOMPosition - 450) {
    onLoadNotification();
  }
});
