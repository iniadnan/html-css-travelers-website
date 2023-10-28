const NavDOM = document.querySelector("#nav");
const HeaderDOM = document.querySelector("#header");

function onLoadPage() {
  onLoadHeader()
}

// FUNCTION FOR HANDLE HEADER ANIMATION
function onLoadHeader() {
  // WIDTH HEADER LEFT - HEADER RIGHT
  HeaderDOM.querySelector(".header-left").style.width = "8%"
  HeaderDOM.querySelector(".header-right").style.width = "92%"
  HeaderDOM.querySelector(".header__main-text").style.transform = "translateY(0px)"
  HeaderDOM.querySelector(".header__secondary-text").style.transform = "translateY(0px)"
}

// NAV: WHEN SCROLL CHANGE BACKGROUND COLOR AND TEXT COLOR
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    NavDOM.querySelector(".-translate-y-full").style.transform = "translateY(0px)"
    const navAnchorDOM = NavDOM.querySelectorAll(".nav-anchor");
    navAnchorDOM.forEach((anchor) => {
      anchor.style.color = "#1E1E1E"
    });
  } else {
    NavDOM.querySelector(".-translate-y-full").style.transform = "translateY(-100%)"
    const navAnchorDOM = NavDOM.querySelectorAll(".nav-anchor");
    navAnchorDOM.forEach((anchor) => {
      anchor.style.color = "#EDEDED"
    });
  }
});