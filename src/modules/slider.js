export const createSlider = (
  controllerId,
  thumbId,
  scrollContainerId,
  trackId
) => {
  if (!(controllerId && thumbId && scrollContainerId && trackId)) return;

  const controller = document.getElementById(controllerId);
  const thumb = document.getElementById(thumbId);
  const scrollContainer = document.getElementById(scrollContainerId);
  const track = document.getElementById(trackId);

  let mouseDown = false;

  const startDrag = () => (mouseDown = true);
  const stopDrag = () => (mouseDown = false);

  thumb.addEventListener("mousedown", startDrag);
  thumb.addEventListener("touchstart", startDrag);

  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchend", stopDrag);

  const moveSlider = (e) => {
    if (!mouseDown) return;

    let containerRect = controller.getBoundingClientRect();
    let sliderWidth = thumb.offsetWidth;
    let maxPosition = containerRect.width - sliderWidth;

    let clientX = e.clientX || e.touches[0].clientX;
    let mousePosition = clientX - containerRect.left;

    let sliderPosition = Math.min(
      maxPosition,
      Math.max(0, mousePosition - sliderWidth / 2)
    );

    thumb.style.left = sliderPosition + "px";

    let maxOffset = track.offsetWidth - scrollContainer.offsetWidth;
    scrollContainer.scrollLeft = (sliderPosition / maxPosition) * maxOffset;
  };

  controller.addEventListener("mousemove", moveSlider);
  controller.addEventListener("touchmove", moveSlider);
};
