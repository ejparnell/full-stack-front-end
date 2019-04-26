const api = require('./api.js')
const ui = require('./ui.js')
const apiPoke = require('../pokemon/api.js')

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
const onBattlePokemon = () => {
  console.log('Ran onBattlePokemon')
  onGetYourPokemon()
    .then(ui.getYourPokemonSuccess)
  // ui.battleSuccess()
}
const onChoosePokemon = (event) => {
  console.log('Ran onChoosePokemon')
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.getYourOnePokemon(id)
    .then(ui.getYourOnePokemonSuccess)
    .catch(ui.failure)
}
const onRandomBattle = () => {
  const randomNumber = Math.floor(Math.random() * 9) + 1
  apiPoke.getRandomPokemon(randomNumber)
    .then(ui.onRandomBattleSuccess)
    .catch(ui.failure)
}

const bagHandler = () => {
  $('#get-your-pokemon').on('click', onGetYourPokemon)
  $('body').on('click', '#catch-pokemon', onCatchPokemon)
  $('body').on('click', '.delete-pokemon', onRemovePokemon)
  $('body').on('click', '.release-pokemon', onGetYourPokemon)
  $('body').on('click', '.update-pokemon', onUpdatePokemon)
  $('body').on('click', '#battle-pokemon', onBattlePokemon)
  $('body').on('click', '.choose-to-battle-pokemon', onChoosePokemon)
  $('body').on('click', '.battle-pokemon', onRandomBattle)
}
module.exports = {
  bagHandler
}
