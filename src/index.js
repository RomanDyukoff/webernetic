import "./index.pug";
import "./index.scss";
import { scrollLogo, logo } from "./modules/scrollLogo";
import { createSlider } from "./modules/slider";

window.addEventListener("scroll", () => scrollLogo(logo, 500, 1672));

createSlider("controller", "thumb", "scrollContainer", "track");
createSlider("controller_1", "thumb_1", "scrollContainer_1", "track_1");
