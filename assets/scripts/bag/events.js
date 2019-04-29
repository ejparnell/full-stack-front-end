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
  api.getYourPokemon()
    .then(ui.checkBagLength)
    .catch(ui.failure)
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
  api.getYourPokemon()
    .then(ui.getYourBattlePokemonSuccess)
    .catch(ui.failure)
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
const navBarToggle = () => {
  $('.side-bar').width('30%')
}
const closeNav = () => {
  $('.side-bar').width('0%')
}
const onReleasePokemon = () => {
  api.getYourPokemon()
    .then(ui.relasePokemonSuccess)
    .catch(ui.failure)
}

const bagHandler = () => {
  $('#get-your-pokemon').on('click', onGetYourPokemon)
  $('body').on('click', '#catch-pokemon', onCatchPokemon)
  $('body').on('click', '.delete-pokemon', onRemovePokemon)
  $('body').on('click', '.release-pokemon', onReleasePokemon)
  $('body').on('click', '.update-pokemon', onUpdatePokemon)
  $('body').on('click', '#battle-pokemon', onBattlePokemon)
  $('body').on('click', '.choose-to-battle-pokemon', onChoosePokemon)
  $('body').on('click', '.battle-pokemon', onRandomBattle)
  $('.toggle-side-bar').on('click', navBarToggle)
  $('.close-nav').on('click', closeNav)
  $('body').on('click', '.get-your-pokemon', onGetYourPokemon)
}
module.exports = {
  bagHandler
}
