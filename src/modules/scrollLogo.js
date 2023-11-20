export const logo = document.querySelector(".welcome__logo");

export const scrollLogo = (el, min, max) => {
  let scrollPosition = window.scrollY;

  let minScroll = min;
  let maxScroll = max;

  if (scrollPosition >= minScroll && scrollPosition <= maxScroll) {
    let newPosition =
      ((scrollPosition - minScroll) / (maxScroll - minScroll)) * min;

    el.style.transform = "translateY(" + newPosition + "px)";
  }
};
