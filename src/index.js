import "./index.pug";
import "./index.scss";
import { scrollLogo, logo } from "../src/modules/scrollLogo";

window.addEventListener("scroll", () => scrollLogo(logo, 500, 1672));

const controller = document.getElementById("controller");
const thumb = document.getElementById("thumb");
const scrollContainer = document.getElementById("scrollContainer");
const track = document.getElementById("track");

let mouseDown = false;

thumb.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

controller.addEventListener("mousemove", (e) => {
  if (!mouseDown) return;

  let containerRect = controller.getBoundingClientRect();
  let sliderWidth = thumb.offsetWidth;
  let maxPosition = containerRect.width - sliderWidth;
  let mousePosition = e.clientX - containerRect.left;

  let sliderPosition = Math.min(
    maxPosition,
    Math.max(0, mousePosition - sliderWidth / 2)
  );

  thumb.style.left = sliderPosition + "px";

  let maxOffset = track.offsetWidth - scrollContainer.offsetWidth;
  scrollContainer.scrollLeft = (sliderPosition / maxPosition) * maxOffset;
});
