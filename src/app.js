const search = document.querySelector("#poke-input");
const searchButton = document.querySelector("#btn");
const pokeContainer = document.querySelector(".poke-container");

const pokeCount = 151;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ghost: "#8f968c",
  ice: "#86e1f7",
};

const initPokemon = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokeBox(data);
};

const createPokeBox = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");
  const weight = pokemon.weight;
  const type = pokemon.types[0].type.name;
  const color = colors[type];

  const pokemonEl = document.createElement("div");
  const classesToAdd = [
    "poke-box",
    "w-[300px]",
    "bg-white,",
    "rounded-[15px]",
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
    "p-[8px]",
    "m-[15px]",
  ];

  pokemonEl.classList.add(...classesToAdd);
  pokemonEl.style.backgroundColor = `${color}`;

  pokemonEl.innerHTML = `
  <img
  class="w-[80%] text-centers my-[10px] "
    src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
    alt="${name} image"
  />
  <h4 class='text-[1.4rem] font-bold my-[5px] mx-auto'>${name}</h4>
  <p class="my-[5px] mx-auto">#${id}</p>
  <p class="font-light">type: ${type}</p>
  <p class="font-light">weight: ${weight} Kg</p>

  `;

  pokeContainer.appendChild(pokemonEl);
};

initPokemon();

search.addEventListener("input", function (e) {
  const pokeBoxes = document.querySelectorAll(".poke-box"); // Güncellenen sınıf adı
  const searcha = search.value.toLowerCase();

  pokeBoxes.forEach((pokeBox) => {
    pokeBox.style.display = "block";
    const name = pokeBox.querySelector("h4").textContent.toLowerCase(); // Pokémon ismini alıyoruz
    if (!name.includes(searcha)) {
      pokeBox.style.display = "none";
    }
  });
});
