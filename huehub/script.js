const palette = document.getElementById('palette');


document.addEventListener('DOMContentLoaded', randomizeAllColors());

function addSwatch() {
  if (palette.childElementCount < 5) {
    const swatch = document.querySelector('.swatch').cloneNode(true);
    setColor(swatch, generateHexCode());
    palette.appendChild(swatch);
  }
}
function removeSwatch() {
  if (palette.childElementCount > 1) {
    palette.lastChild.remove();
  }
}
document.addEventListener('keydown', e => {
  if (e.code == 'Space') {
    randomizeAllColors();
  }
})

function randomizeAllColors() {
  palette.querySelectorAll('.swatch').forEach((swatch) => setColor(swatch, generateHexCode()))
}

function setColor(swatch, color) {
  swatch.style.backgroundColor = color;
  swatch.querySelector('.color-picker').value = color;
  swatch.querySelector('.hex-code-display').textContent = color;
}

function generateHexCode() {
  const hexCharacters = '1234567890ABCEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }
  return hexCode;
}
