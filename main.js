function loadPokemon(){
  let url = "https://pokeapi.co/api/v2/pokemon/1"
  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) =>{
    console.log(data)
    document.querySelector("#name").innerHTML = data.name
    document.querySelector("#image").setAttribute("src", data.sprites.front_default)
    document.querySelector("#number").innerHTML = data.id
  })
 
  .catch((erro) =>{
    console.log(erro)
  })
}


const button = document.querySelector("#btn")

button.onclick = loadPokemon