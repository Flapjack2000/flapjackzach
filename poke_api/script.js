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


document.addEventListener('keyup', e => {
  if (e.key == 'Enter') {
    fetchData();
  }
})

async function fetchData() {
  try {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      console.error('Could not find pokemon');
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');
    const nameDisplay = document.getElementById('nameDisplay');
    const typeDisplay = document.getElementById('typeDisplay');


    document.getElementById('favicon').href = pokemonSprite;
    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
    nameDisplay.textContent = data.name.toUpperCase();
    typeDisplay.textContent = `${data.types[0].type.name.toUpperCase()}`;

    //SET BACKGROUND COLOR TO MATCH TYPE(S)
    if (data.types.length > 1) {
      typeDisplay.textContent += `, ${data.types[1].type.name.toUpperCase()}`;
      imgElement.style.background = `linear-gradient(45deg, ${TypeColors[`${data.types[0].type.name}`]} 0 50%, ${TypeColors[`${data.types[1].type.name}`]} 50% 100%)`;
    }
    else {
      imgElement.style.background = `${TypeColors[`${data.types[0].type.name}`]}`;
    }
  }
  catch (error) {
    console.error(`Oops: ${error} `);
  }
}

async function allPokemonDropdown() {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);

  data.results.forEach(pokemonObject => {
    const dropdownOption = document.createElement(`option`);
    dropdownOption.value = pokemonObject.name;
    document.getElementById('allPokemon').appendChild(dropdownOption);
  });
}
allPokemonDropdown();
