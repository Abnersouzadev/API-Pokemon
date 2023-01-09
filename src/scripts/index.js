async function renderizaPokemons() {
    const ulTag = document.querySelector("ul");
    const tagLoading = document.querySelector("#loading");
    const listaDePokemons = await PokeAPI();
  
    setTimeout(() => {
      listaDePokemons.results.forEach((pokemon) => {
          tagLoading.innerHTML = "";
          const numeroNaPokedex = pokemon.url.slice(34, -1);
  
        ulTag.insertAdjacentHTML(
          "beforeend",
          `
                <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
                </li>
          `
        );
      });
    }, 1500);
  }
  renderizaPokemons();

  async function pesquisa(){
    let ul = document.querySelector("ul");

    let input = document.querySelector("input")

    let pesquisaPokemon = await pesquisaPoke(input.value);

    let numeroPokedex = pesquisaPokemon.id;

    ul.innerHTML = "";

    ul.insertAdjacentHTML('beforeend', `
    <li class="flex_center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroPokedex}.png" alt=${pesquisaPokemon.name}>
        <h3 class="poke_name">${pesquisaPokemon.name}</h3>
    </li>`)

  }

  let botao = document.querySelector("button")

  botao.addEventListener("click", async (event) => {
    await pesquisa();
    event.preventDefault
  })
  

