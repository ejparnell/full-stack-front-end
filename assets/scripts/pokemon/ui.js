const store = require('../store')

const onGetPokemonSuccess = (response) => {
  response.monsters.forEach(pokemon => {
    $('.poke-message').append(`
        <p>Name: ${pokemon.name}</p>
        <p>Type: ${pokemon.breed}</p>
        <p>Rarity: ${pokemon.rarity}</p>
        <br>
    `)
  })
}
const onGetPokemonFailure = () => {
  console.log('You failed bro!')
}

const onGetOnePokemonSuccess = (response) => {
  const pokemon = response.monster
  $('.poke-message').html(`
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    <br>
    `)
}
const onGetOnePokemonFailure = () => {
  console.log('You failed bro!')
}
const getRandomPokemonSuccess = (response) => {
  const pokemon = response.monster
  $('.poke-message').html(`
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    <button id="catch-pokemon">Catch this pokemon</button>
    <br>
    `)
  store.monster = response.monster
  console.log(`Pokemon id is ${response.monster.id}`)
}

module.exports = {
  onGetPokemonSuccess,
  onGetPokemonFailure,
  onGetOnePokemonSuccess,
  onGetOnePokemonFailure,
  getRandomPokemonSuccess
}
