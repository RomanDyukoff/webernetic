export const scrollLogo = (min, max) => {
  const logo = document.querySelector(".welcome__logo");
  let scrollPosition = window.scrollY;

  let minScroll = min;
  let maxScroll = max;

  if (scrollPosition >= minScroll && scrollPosition <= maxScroll) {
    let newPosition =
      ((scrollPosition - minScroll) / (maxScroll - minScroll)) * min;

    logo.style.transform = "translateY(" + newPosition + "px)";
  }
};
