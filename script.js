// SLIDING EFFECT //
const cardSlider = document.querySelector('.card-slider');
const cardWidth = document.querySelector('.card').offsetWidth + 5; // Consider card width and margin
const numCards = document.querySelectorAll('.card').length;

const totalWidth = cardWidth * numCards;
const sliderWidth = totalWidth * 2; // Duplicated cards

cardSlider.style.width = `${sliderWidth}px`;

let currentPosition = 0;

function slideCards() {
  currentPosition -= 1;
  cardSlider.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition <= -totalWidth) {
    currentPosition = 0;
  }
}

setInterval(slideCards, 15); // Adjust the timing as needed
// END SLIDING EFFECT //
