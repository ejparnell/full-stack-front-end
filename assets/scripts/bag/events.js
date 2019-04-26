const api = require('./api.js')
const ui = require('./ui.js')

const onGetYourPokemon = () => {
  console.log('Ran onGetYourPokemon')
  api.getYourPokemon()
    .then(ui.getYourPokemonSuccess)
    .catch(ui.failure)
}
const onCatchPokemon = () => {
  console.log('Ran onCatchPokemon')
  api.catchPokemon()
    .then(ui.onCatchPokemonSuccess)
    .catch(ui.tooManyPokemon)
}
const onRemovePokemon = () => {
  console.log('Ran onRemovePokemon')
  const id = $(event.target).closest('section').data('id')
  console.log(`bag id is ${id}`)
  api.removePokemon(id)
    .then(ui.onRemovePokemonSuccess)
    .catch(ui.failure)
}
const onUpdatePokemon = () => {
  console.log('Ran onUpdatePokemon')
  const id = $(event.target).closest('section').data('id')
  console.log(`bag id is ${id}`)
  api.updatePokemon(id)
    .then(ui.onUpdatePokemonSuccess)
    .catch(ui.onUpdatePokemonFailure)
}

const bagHandler = () => {
  $('#get-your-pokemon').on('click', onGetYourPokemon)
  $('#catch-pokemon').on('click', onCatchPokemon)
  $('body').on('click', '.delete-pokemon', onRemovePokemon)
  $('body').on('click', '.release-pokemon', onGetYourPokemon)
  $('body').on('click', '.update-pokemon', onUpdatePokemon)
}
module.exports = {
  bagHandler
}
