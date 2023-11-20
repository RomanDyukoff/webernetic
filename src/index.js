import "./index.pug";
import "./index.scss";
import { scrollLogo } from "../src/modules/scrollLogo";

window.addEventListener("scroll", () => scrollLogo(500, 1672));
