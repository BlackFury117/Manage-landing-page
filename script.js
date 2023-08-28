// SLIDING EFFECT //

document.addEventListener('DOMContentLoaded', () => {
  const cardSlider = document.querySelector('.card-slider');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 5;
  const numCards = cards.length;

  const totalWidth = cardWidth * numCards;
  const sliderWidth = totalWidth * 2;

  cardSlider.style.width = `${sliderWidth}px`;

  let currentPosition = 0;
  let slideInterval = setInterval(slideCards, 15);

  function slideCards() {
    currentPosition -= 1;
    cardSlider.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition <= -totalWidth) {
      currentPosition = 0;
    }
  }

  cardSlider.addEventListener('mouseover', () => {
    clearInterval(slideInterval); // Clear the interval on mouseover
  });

  cardSlider.addEventListener('mouseout', () => {
    clearInterval(slideInterval); // Clear any existing interval
    slideInterval = setInterval(slideCards, 15);
  });
});

// END SLIDING EFFECT //