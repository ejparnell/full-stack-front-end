const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPokemon = () => {
  console.log('Ran onGetPokemon')
  api.getPokemon()
    .then(ui.onGetPokemonSuccess)
    .catch(ui.onGetPokemonFailure)
}
const onGetOnePokemon = (event) => {
  console.log('Ran onGetOnePokemon')
  event.preventDefault()
  const id = getFormFields(event.target)
  console.log(id)
  api.getOnePokemon(id.monster.id)
    .then(ui.onGetOnePokemonSuccess)
    .catch(ui.onGetOnePokemonFailure)
}
const onGetRandomPokemon = () => {
  console.log('Ran onGetRandomPokemon')
  const randomNumber = Math.floor(Math.random() * 9) + 1
  api.getRandomPokemon(randomNumber)
    .then(ui.getRandomPokemonSuccess)
    .catch(ui.onGetOnePokemonFailure)
}

const pokeHandler = () => {
  $('#get-all-pokemon').on('click', onGetPokemon)
  $('#get-one-pokemon').on('submit', onGetOnePokemon)
  $('#get-random').on('click', onGetRandomPokemon)
}
module.exports = {
  pokeHandler
}
