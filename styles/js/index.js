const NavDOM = document.querySelector("#nav");
const HeaderDOM = document.querySelector("#header");
const EscapeParadiseDOM = document.querySelector("#escape-paradise");
const NotificationDOM = document.querySelector("#notification");

let EscapeParadiseDOMPosition = EscapeParadiseDOM.getBoundingClientRect().top;
let NotificationDOMPosition = NotificationDOM.getBoundingClientRect().top;

function onLoadPage() {
  onLoadHeader();
}

// FUNCTION HEADER SECTION
function onLoadHeader() {
  // WIDTH HEADER LEFT - HEADER RIGHT
  HeaderDOM.querySelector(".header-left").style.width = "8%";
  HeaderDOM.querySelector(".header-right").style.width = "92%";
  HeaderDOM.querySelector(".header__main-text").style.transform =
    "translateY(0px)";
  HeaderDOM.querySelector(".header__secondary-text").style.transform =
    "translateY(0px)";
}

// FUNCTION ESCAPE PARADISE SECTION
function onLoadEscapeParadise() {
  // TEXT ANIMATION
  EscapeParadiseDOM.querySelectorAll(".escape-paradise__main-text").forEach(
    (el) => el.classList.add("escape-paradise__main-text-animation")
  );
  // PHOTO SLIDE RIGHT ANIMATION
  EscapeParadiseDOM.querySelectorAll(".escape-paradise__image-slide").forEach(
    (el) => (el.style.left = "0px")
  );
}

// FUNCTION NOTIFICATION SECTION
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

  // WHEN WINDOW IN AREA ESCAPE PARADISE
  if (window.scrollY > EscapeParadiseDOMPosition - 450) {
    onLoadEscapeParadise();
  }

  // WHEN WINDOW IN AREA NOTIFICATION
  if (window.scrollY > NotificationDOMPosition - 650) {
    onLoadNotification();
  }
});

const popularDestinationsSwiper = new Swiper(".popular-destination-swiper", {
  slidesPerView: "auto",
  spaceBetween: 18,
  navigation: {
    nextEl: ".popular-destination-swiper-button-next",
    prevEl: ".popular-destination-swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: "auto",
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
});
