NavDOM = document.querySelector("#nav");

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
