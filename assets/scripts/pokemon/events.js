const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPokemon = () => {
  api.getPokemon()
    .then(ui.onGetPokemonSuccess)
    .catch(ui.onGetPokemonFailure)
}
const onGetOnePokemon = (event) => {
  event.preventDefault()
  const id = getFormFields(event.target)
  api.getOnePokemon(id.monster.id)
    .then(ui.onGetOnePokemonSuccess)
    .catch(ui.onGetOnePokemonFailure)
}
const onGetRandomPokemon = () => {
  const randomEncouterNumber = Math.floor(Math.random() * 10) + 1
  if (randomEncouterNumber >= 6) {
    const randomPokemonNumber = Math.floor(Math.random() * 149) + 1
    api.getRandomPokemon(randomPokemonNumber)
      .then(ui.getRandomPokemonSuccess)
      .catch(ui.onGetOnePokemonFailure)
  } else {
    $('.poke-message').text('You encounter nothing today.')
  }
}

const pokeHandler = () => {
  $('#get-all-pokemon').on('click', onGetPokemon)
  $('#get-one-pokemon').on('submit', onGetOnePokemon)
  $('#get-random').on('click', onGetRandomPokemon)
}
module.exports = {
  pokeHandler
}
