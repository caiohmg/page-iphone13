function imgSlider(e) {
  console.log('Changing image to:', e);
  document.querySelector('#phone').src = e;
}

function circleChange(color) {
  console.log('Changing circle color to:', color);
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}