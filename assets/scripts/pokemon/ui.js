const store = require('../store')

const onGetPokemonSuccess = (response) => {
  hideOthers()
  response.monsters.forEach(pokemon => {
    $('.pokedex').show().append(`
      <section class="poke-card">
        <img src="assets/scripts/pokemon-pics/${pokemon.name}.jpg" alt="Picture of ${pokemon.name}" class="pokemon-pic">
        <p>Name: ${pokemon.name}</p>
        <p>Type: ${pokemon.breed}</p>
        <p>Rarity: ${pokemon.rarity}</p>
        </section>
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
  hideOthers()
  const pokemon = response.monster
  $('.poke-display').html(`
    <div class="pokemon-card">
    <img src="assets/scripts/pokemon-pics/${pokemon.name}.jpg" alt="Picture of ${pokemon.name}" class="pokemon-pic">
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    <button id="catch-pokemon">Catch this pokemon</button>
    </div>
    <br>
    `)
  store.monster = response.monster
  console.log(`Pokemon id is ${response.monster.id}`)
}
const hideOthers = () => {
  $('.pokedex').hide()
  $('.poke-message').hide()
  $('.poke-bag').hide()
}

module.exports = {
  onGetPokemonSuccess,
  onGetPokemonFailure,
  onGetOnePokemonSuccess,
  onGetOnePokemonFailure,
  getRandomPokemonSuccess
}
