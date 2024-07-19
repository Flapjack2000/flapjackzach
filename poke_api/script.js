const dropdown = document.getElementById('dropdown');
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
const evolutionDisplay = document.getElementById('evolutionDisplay');

// check for query in url
document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href.split('?')[1];
  const params = new URLSearchParams(url);
  if (params.has('pokemon')) {
    const pokemon = params.get('pokemon').toLowerCase();
    fetchPokemon(pokemon);
  }
  else {
    setURL(randomPikachu())
  }
  createDropdown();

})

function setURL(pokemon) {
  const url = new URL(window.location.href.split('?')[0] += `?pokemon=${pokemon}`);
  window.location.href = url;
}

document.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    setURL(inputField.value.toLowerCase());
  }
})

async function getAllPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10000');
  return await response.json();
}

function createDropdown() {
  getAllPokemon()
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = capitalizeFirstLetter(pokemon.name);
        dropdown.appendChild(option);
      });
    })
}
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
      }
      else {

        // display sprite image and set background colors to match types
        setSpriteDisplay(data.sprites.front_default,)

        // set sprite background colors
        setTypeColors(data);

        // display name, set image alt and title
        setNameDisplay(capitalizeFirstLetter(data.name));

        // display types
        let typeList = '';
        data.types.forEach(typeObj => {
          typeList += capitalizeFirstLetter(typeObj.type.name) + ', '; //cut off last comma and space
        });
        setTypeDisplay(typeList.slice(0, -2));

        // display HP
        setHPDisplay(data.stats[0].base_stat);
        // display attack
        setAttackDisplay(data.stats[1].base_stat);

        // display defense
        setDefenseDisplay(data.stats[2].base_stat);

        // display special attack
        setSpecialAttackDisplay(data.stats[3].base_stat);

        // display special defense
        setSpecialDefenseDisplay(data.stats[4].base_stat);

        // display speed
        setSpeedDisplay(data.stats[5].base_stat);

        // display base XP
        setBaseExperienceDisplay(data.base_experience);

        // display abilities
        let abilityList = '';
        data.abilities.forEach(abilityObj => {
          abilityList += capitalizeFirstLetter(abilityObj.ability.name) + ', ';
        });
        setAbilityDisplay(abilityList.slice(0, -2)); // cut off last comma and space


        getEvolutionChain(data.name)
          .then(evoChain => {
            getEvolutionChainData(evoChain)
              .then(evoData => {

                let stage1 = capitalizeFirstLetter(evoData.chain.species.name);
                let stage2 = [];
                let stage3 = [];


                // console.log(evoData.chain.species.name);

                // console.log(evoData.chain.evolves_to[0].species.name);

                evoData.chain.evolves_to.forEach(pokemon => {
                  stage2.push(capitalizeFirstLetter(pokemon.species.name));

                  pokemon.evolves_to.forEach(pokemon => {
                    stage3.push(capitalizeFirstLetter(pokemon.species.name))
                  })
                })
                // console.log(evoData.chain.evolves_to[0].evolves_to[0].species.name);


                console.log(stage1);
                console.log(stage2.join(', '));
                console.log(stage3.join(', '));

                setEvolutionDisplay(stage1, stage2.join(', '), stage3.join(', '));
                // works for classic evo chains with 3 pokemon, but not special circumstances with more or less evolutions
                // use forEach loops to log all evolutionsv

              })

          })
      }
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
function clearBackgroundColor() {
  spriteDisplay.style.background = '';
}

async function getEvolutionChain(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
  const evoData = await response.json();

  return evoData.evolution_chain.url;
}
async function getEvolutionChainData(evoChain) {
  const response = await fetch(evoChain);
  const evoData = await response.json();
  return evoData;
}


function getLink() {
  const link = window.location;
  navigator.clipboard.writeText(link);
  window.alert(`Copied Link:\n${link.toString()}`)
}

function setSpriteDisplay(src) {
  spriteDisplay.src = '' + src;
}
function setNameDisplay(name) {
  nameDisplay.textContent = 'Name: ' + name;
  spriteDisplay.alt = name;
  spriteDisplay.title = name;
}
function setTypeDisplay(types) {
  typeDisplay.textContent = 'Type: ' + types;
}
function setHPDisplay(hp) {
  hpDisplay.textContent = 'HP: ' + hp
}
function setAttackDisplay(attack) {
  attackDisplay.textContent = 'Attack: ' + attack;
}
function setDefenseDisplay(defense) {
  defenseDisplay.textContent = 'Defense: ' + defense;
}
function setSpecialAttackDisplay(specialAttack) {
  specialAttackDisplay.textContent = 'Special Attack: ' + specialAttack;
}
function setSpecialDefenseDisplay(specialDefense) {
  specialDefenseDisplay.textContent = 'Special Defense: ' + specialDefense;
}
function setSpeedDisplay(speed) {
  speedDisplay.textContent = 'Speed: ' + speed;
}
function setBaseExperienceDisplay(baseExperience) {
  baseExperienceDisplay.textContent = 'Base Experience: ' + baseExperience;
}
function setAbilityDisplay(abilities) {
  abilityDisplay.textContent = 'Abilities: ' + abilities;
}
function setEvolutionDisplay(stage1, stage2, stage3) {
  evolutionDisplay.textContent = 'Evolution Chain: ' + stage1;
  if (stage2) evolutionDisplay.textContent += ' → ' + stage2;
  if (stage3) evolutionDisplay.textContent += ' → ' + stage3;
}

function clearInputField() {
  inputField.value = '';
}
function clearDisplayedData() {
  setSpriteDisplay('');
  setNameDisplay('');
  setTypeDisplay('');
  setHPDisplay('')
  setAttackDisplay('');
  setDefenseDisplay('');
  setSpecialAttackDisplay('');
  setSpecialDefenseDisplay('');
  setSpeedDisplay('');
  setBaseExperienceDisplay('')
  setAbilityDisplay('')
  setEvolutionDisplay('');
  clearBackgroundColor();
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

function randomPikachu() {
  const pikachuArray = [
    'pikachu-rock-star',
    'pikachu-pop-star',
    'pikachu-belle',
    'pikachu-phd',
    'pikachu-libre',
    'pikachu-cosplay',
    'raichu',
    'pichu',
    'pikachu',
    'pikachu',
    'pikachu',
    'pikachu',
    'pikachu',
    'pikachu',
    'pikachu',
    'pikachu'];
  return pikachuArray[Math.floor(Math.random() * pikachuArray.length)];
}

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
