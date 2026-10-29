export default function initializeReviewSlider() {
  const track = document.getElementById("customer-reviews-list");
  const nextBtn = document.getElementById("carousel-controls--button-next");
  const prevBtn = document.getElementById("carousel-controls--button-prev");

  // Calculate the width to scroll based on a single item element
  const getScrollAmount = () => {
    const item = track.querySelector(".customer-reviews--item");
    const itemWidth = item.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    console.log(itemWidth + gap);
    return itemWidth + gap;
  };

  // Event Listeners for slide interaction
  nextBtn.addEventListener("click", () => {
    track.scrollLeft += getScrollAmount();
  });

  prevBtn.addEventListener("click", () => {
    track.scrollLeft -= getScrollAmount();
  });

  //  Disable/Enable arrows dynamically based on slide edges
  track.addEventListener("scroll", () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    // Disable prev button if at the start boundary
    prevBtn.disabled = track.scrollLeft <= 5;

    // Disable next button if at the end boundary
    nextBtn.disabled = track.scrollLeft >= maxScrollLeft - 5;
  });

  // Initialize boundary check on runtime execution
  window.addEventListener("load", () => {
    prevBtn.disabled = true;
  });
}
