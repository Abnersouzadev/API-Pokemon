async function PokeAPI() {
    const pokemonDaAPI = await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  
    return pokemonDaAPI;
  }
  
  PokeAPI()
