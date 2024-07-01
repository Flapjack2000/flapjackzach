const palette = document.getElementById('palette');
const siteTitle = document.getElementById('site-title');
const swatchCountLimit = 8;
let isTransparencyToggled = false;
let hexCodeLength = 6;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.lock-btn').checked = false;
  randomizeAllColors();
});

function generateHexCode() {
  const hexCharacters = '1234567890ABCEF';
  let hexCode = '#';
  for (let i = 0; i < hexCodeLength; i++) {
    hexCode += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }
  return hexCode;
}

function setColor(swatch, color) {
  if (!swatch.querySelector('.lock-btn').checked) {
    swatch.style.backgroundColor = color;
    swatch.querySelector('.color-picker').value = color;
    swatch.querySelector('.hex-code-display').textContent = color;
    updateTitleGradient();
  }
}

function addSwatch() {
  if (palette.childElementCount < swatchCountLimit) {
    const swatch = document.querySelector('.swatch').cloneNode(true);
    swatch.querySelector('.lock-btn').checked = false;
    setColor(swatch, generateHexCode());

    palette.appendChild(swatch);
  }
  updateTitleGradient();
}

function removeSwatch() {
  if (palette.childElementCount > 1) {
    palette.lastChild.remove();
  }
  updateTitleGradient();
}

document.addEventListener('keydown', e => {
  if (e.code == 'Space') {
    randomizeAllColors();
    e.preventDefault();
  }
})

function randomizeAllColors() {
  palette.querySelectorAll('.swatch').forEach((swatch) => setColor(swatch, generateHexCode()));
}

function updateTitleGradient() {
  // query select all colors
  const colorList = [];
  document.querySelectorAll('.swatch').forEach(swatch => colorList.push(swatch.style.backgroundColor));
  // concat colors into a string and join with ', '
  // set title's backgroundImage to linear gradient of joined colors
  if (colorList.length > 1) {
    siteTitle.style.backgroundImage = `linear-gradient(to right, ${colorList.join(', ')})`;
    siteTitle.style.color = 'transparent';
  }
  else {
    siteTitle.style.color = `${colorList[0]}`;
    siteTitle.style.backgroundImage = 'none';
  }
}

function toggleTransparency() {
  isTransparencyToggled = !isTransparencyToggled;
  isTransparencyToggled ? hexCodeLength = 8 : hexCodeLength = 6;
  console.log(isTransparencyToggled);
}

function hint() {
  window.alert(
    `Hi! Welcome to THE HUE-HUB!!!
    - Press SPACE to randomize all the colors.
    - Click the hex codes to copy them to the clipboard.
    - Click the double circle to activate the color picker.(Unfortunately, the color pickers are not working in Safari or Chrome - but don't worry! I am working on a solution.)`);
}
