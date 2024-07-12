// What's next:
// background colors on the pokemon's sprite that indicate their type
// dropdown menu that lists all pokemon
// display evolutions 
const log = console.log;

// check for query in url
document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href.split('?')[1];
  const params = new URLSearchParams(url);
  if (params.has('pokemon')) {
    const pokemon = params.get('pokemon');
    fetchPokemon(pokemon);
  }
})

const inputField = document.getElementById('inputField');
const spriteDisplay = document.getElementById('spriteDisplay');
const nameDisplay = document.getElementById('nameDisplay');
const typeDisplay = document.getElementById('typeDisplay');
const hpDisplay = document.getElementById('hpDisplay');
const attackDisplay = document.getElementById('attackDisplay');
const defenseDisplay = document.getElementById('defenseDisplay');
const specialAttackDisplay = document.getElementById('specialAttackDisplay');
const specialDefenseDisplay = document.getElementById('specialDefenseDisplay');
const speedDisplay = document.getElementById('speedDisplay');
const baseExperienceDisplay = document.getElementById('baseExperienceDisplay');
const abilityDisplay = document.getElementById('abilityDisplay');
const evolvedFromDisplay = document.getElementById('evolvedFromDisplay');
const evolvesToDisplay = document.getElementById('evolvesToDisplay');

let currentPokemon;

document.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    currentPokemon = inputField.value.toLowerCase();
    fetchPokemon(currentPokemon);
  }
})

async function getPokemonData(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return await response.json();
  }
  catch {
    console.error('Could not find this pokemon');
  }
}

function fetchPokemon(pokemon) {
  getPokemonData(pokemon)
    .then(data => {
      if (!data) {
        clearDisplayedData();
        return;
      }

      // display sprite image and set background colors to match types
      spriteDisplay.src = data.sprites.front_default;
      setTypeColors(data);

      // display name
      nameDisplay.textContent = `Name: ${capitalizeFirstLetter(data.name)}`;

      // display types
      let typeList = `Type: `;
      data.types.forEach(typeObj => {
        typeList += capitalizeFirstLetter(typeObj.type.name) + ', ';
        typeDisplay.textContent = typeList.slice(0, -2); //cut off last comma and space
      });

      // display HP
      hpDisplay.textContent = `HP: ${data.stats[0].base_stat}`;
      // display attack
      attackDisplay.textContent = `Attack: ${data.stats[1].base_stat}`;

      // display defense
      defenseDisplay.textContent = `Defense: ${data.stats[2].base_stat}`;

      // display special attack
      specialAttackDisplay.textContent = `Special Attack: ${data.stats[3].base_stat}`;

      // display special defense
      specialDefenseDisplay.textContent = `Special Defense: ${data.stats[4].base_stat}`;

      // display speed
      speedDisplay.textContent = `Speed: ${data.stats[5].base_stat}`;

      // display base XP
      baseExperienceDisplay.textContent = `Base Experience: ${data.base_experience}`;

      // display abilities
      let abilityList = `Abilities: `
      data.abilities.forEach(abilityObj => {
        abilityList += capitalizeFirstLetter(abilityObj.ability.name) + ', ';
        abilityDisplay.textContent = abilityList.slice(0, -2); // cut off last comma and space
      });

      getEvolutionData(data.id)
        .then(evoData => {
          console.log(evoData);
          //display evo data
        })
    })
}

function setTypeColors(data) {
  // get type, match to the object of colors, fill the background or gradient when there's more than one type
  const color1 = TypeColors[`${data.types[0].type.name.toLowerCase()}`];
  if (data.types.length > 1) {
    const color2 = TypeColors[`${data.types[1].type.name.toLowerCase()}`];
    spriteDisplay.style.background = `linear-gradient(45deg, ${color1} 0% 50%, ${color2} 50% 100%)`;
  }
  else {
    spriteDisplay.style.background = color1;
  }
}

async function getEvolutionData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  return await response.json();
}

function clearInputField() {
  inputField.value = '';
}

function clearDisplayedData() {
  spriteDisplay.src = ' ';
  nameDisplay.textContent = 'Name: ';
  typeDisplay.textContent = 'Type: ';
  attackDisplay.textContent = 'Attack: ';
  defenseDisplay.textContent = 'Defense: ';
  specialAttackDisplay.textContent = 'Special Attack: ';
  specialDefenseDisplay.textContent = 'Special Defense: ';
  speedDisplay.textContent = 'Speed: ';
  baseExperienceDisplay.textContent = 'Base Experience: ';
  abilityDisplay.textContent = 'Abilities: ';
}

function capitalizeFirstLetter(string) {
  if (string.includes('-')) {
    // split hyphenated words into multiple strings, capitalize the first letter, then put them back together
    return string.split('-').map(word => word = word.charAt(0).toUpperCase() + word.slice(1)).join('-');
  }
  else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

const TypeColors = {
  grass: 'hsl(105, 50%, 45%)',
  fire: 'hsl(0, 55%, 50%)',
  electric: 'hsl(50, 100%, 70%)',
  water: 'hsl(210, 60%, 60%)',
  flying: 'hsl(225, 40%, 50%)',
  fighting: 'hsl(25, 55%, 50%)',
  psychic: 'hsl(325, 45%, 55%)',
  dragon: 'hsl(170, 35%, 50%)',
  steel: 'hsl(200, 25%, 45%)',
  ghost: 'hsl(280, 30%, 60%)',
  dark: 'hsl(295, 25%, 45%)',
  ice: 'hsl(200, 40%, 60%)',
  rock: 'hsl(180, 15%, 45%)',
  ground: 'hsl(40, 35%, 40%)',
  poison: 'hsl(270, 30%, 50%)',
  bug: 'hsl(90, 50%, 40%)',
  fairy: 'hsl(310, 35%, 75%)',
  normal: 'hsl(0, 0%, 65%)'
};

//pokeapi cheat sheet

// STATS:
// data.stats[0].base_stat === hp
// data.stats[1].base_stat === attack
// data.stats[2].base_stat === defense
// data.stats[3].base_stat === special-attack
// data.stats[4].base_stat === special-defense
// data.stats[5].base_stat === speed

// TYPES:
// data.types[?].type.name === grass/psychic/flying/etc
