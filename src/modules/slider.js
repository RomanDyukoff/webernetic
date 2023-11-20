export const createSlider = (
  controllerId,
  thumbId,
  scrollContainerId,
  trackId
) => {
  const controller = document.getElementById(controllerId);
  const thumb = document.getElementById(thumbId);
  const scrollContainer = document.getElementById(scrollContainerId);
  const track = document.getElementById(trackId);

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
};
