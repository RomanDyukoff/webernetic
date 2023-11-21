import "./index.pug";
import "./index.scss";
import { addScrollEvent, logo, lines } from "./modules/scrollLogo";
import { createSlider } from "./modules/slider";

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
