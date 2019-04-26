const store = require('../store.js')

const getYourPokemonSuccess = (response) => {
  const bag = response.bags
  bag.forEach(bag => {
    $('.poke-message').append(`
      <section data-id="${bag.id}">
      <p>Name: ${bag.monster.name}</p>
      <p>Type: ${bag.monster.breed}</p>
      <p>Rarity: ${bag.monster.rarity}</p>
      <button type="button" class="delete-pokemon">Remove Pokemon</button>
      <button type="button" class="update-pokemon">Update Pokemon</button>
      </br>
      </section>
      `)
  })
}
const failure = () => {
  console.log('You failed bro!')
}
const onCatchPokemonSuccess = (response) => {
  console.log(response)
}
const tooManyPokemon = () => {
  console.log('Please relase a pokemon')
  $('.poke-message').append(`
    <p>Bag is full</p>
    <p>Would you like to keep this new pokemon?</p>
    <button type="button" class="release-pokemon">Keep Pokemon</button>
  `)
}
const onUpdatePokemonSuccess = () => {
  $('.poke-message').html(`
    <p>You just caught ${store.monster.name}</p>
    `)
  store.monster = null
}
const onUpdatePokemonFailure = () => {
  if (store.monster === false) {
    $('.poke-message').append('You have to encounter a pokemon to update your bag')
  }
}

module.exports = {
  getYourPokemonSuccess,
  failure,
  onCatchPokemonSuccess,
  tooManyPokemon,
  onUpdatePokemonSuccess,
  onUpdatePokemonFailure
}
