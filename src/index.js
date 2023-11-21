import "./index.pug";
import "./index.scss";
import { addScrollEvent, logo, lines } from "./modules/scrollLogo";
import { createSlider } from "./modules/slider";

const labels = document.querySelectorAll(".footer__label");
const textabels = [
  "Сайт",
  "Поддержка",
  "Доработка",
  "Аудит",
  "Наполнение",
  "Другое",
];

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const handleResize = debounce(() => {
  if (window.innerWidth <= 480 && labels) {
    labels.forEach((label, i) => {
      const span = label.querySelector("span");
      if (span) {
        span.textContent = textabels[i];
      }
    });
  }
}, 250);

window.addEventListener("resize", handleResize);

const scrollElements = [
  {
    el: logo,
    start: 500,
    end: 1672,
    spead: 2,
    prevTransform: "",
  },
  {
    el: lines,
    start: 4700,
    end: 5700,
    spead: 1,
    prevTransform: "rotate(20deg) translateX(-20%)",
  },
];

createSlider("controller", "thumb", "scrollContainer", "track");
createSlider("controller_1", "thumb_1", "scrollContainer_1", "track_1");

addScrollEvent(scrollElements);
