export const logo = document.querySelector(".welcome__logo");
export const lines = document.querySelector(".mobile__lines");

export const scrollLogo = (el, min, max) => {
  if (!(el && min && max)) return;

  let scrollPosition = window.scrollY;

  let minScroll = min;
  let maxScroll = max;

  if (scrollPosition >= minScroll && scrollPosition <= maxScroll) {
    let newPosition =
      ((scrollPosition - minScroll) / (maxScroll - minScroll)) * min;

    console.log(newPosition);

    el.style.transform = `translateY(${newPosition}px)`;
  }
};

export const addScrollEvent = (elements) => {
  if (!elements.length) return;
  if (!(window.innerWidth <= 480)) {
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;

      elements.forEach((element) => {
        if (scrollPosition >= element.start && scrollPosition <= element.end) {
          element.el.style.transform = `${element.prevTransform} translateY(${
            (scrollPosition - element.start) / element.spead
          }px)`;
        }
      });
    });
  }
};
