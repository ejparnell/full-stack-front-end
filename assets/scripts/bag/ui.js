const store = require('../store.js')

const getYourPokemonSuccess = (response) => {
  const bag = response.bags
  bag.forEach(bag => {
    $('.poke-bag').append(`
      <section data-id="${bag.id}">
      <img src="assets/scripts/pokemon-pics/${bag.monster.name}.jpg" alt="Picture of ${bag.monster.name}" class="pokemon-pic">
      <p>Name: ${bag.monster.name}</p>
      <p>Type: ${bag.monster.breed}</p>
      <p>Rarity: ${bag.monster.rarity}</p>
      <button type="button" class="delete-pokemon">Remove Pokemon</button>
      <button type="button" class="update-pokemon">Update Pokemon</button>
      <button type="button" class="choose-to-battle-pokemon">Choose to battle</button>
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
const getYourOnePokemonSuccess = (response) => {
  const pokemon = response.bag.monster
  console.log(pokemon)
  $('.poke-message').html(`
    <p>You Choose</p>
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    <br>
    <button type="button" class="battle-pokemon">Battle!</button>
    `)
  store.choosenPokemon = response.bag.monster
  console.log(store.choosenPokemon)
}
const onRandomBattleSuccess = (response) => {
  store.wildPokemon = response.monster
  const wildBreed = store.wildPokemon.breed
  const choosenBreed = store.choosenPokemon.breed
  battleLogic(wildBreed, choosenBreed)
  console.log(`wild pokemon is ${wildBreed}`)
  console.log(`your pokemon is ${choosenBreed}`)
  $('.poke-message').html(`
    <p>Your Pokemon is</p>
    <p>Name: ${store.choosenPokemon.name}</p>
    <p>Type: ${store.choosenPokemon.breed}</p>
    <p>Rarity: ${store.choosenPokemon.rarity}</p>
    </br>
    <p>You encounter</p>
    <p>Name: ${store.wildPokemon.name}</p>
    <p>Type: ${store.wildPokemon.breed}</p>
    <p>Rarity: ${store.wildPokemon.rarity}</p>
    </br>
    `)
}
const battleLogic = (wildBreed, choosenBreed) => {
  if (wildBreed === 'Fire' && choosenBreed === 'Grass') {
    console.log('You lose')
  }
  if (wildBreed === 'Grass' && choosenBreed === 'Water') {
    console.log('You lose')
  }
  if (wildBreed === 'Water' && choosenBreed === 'Fire') {
    console.log('You lose')
  }
  if (choosenBreed === 'Water' && wildBreed === 'Fire') {
    console.log('You win')
  }
  if (choosenBreed === 'Fire' && wildBreed === 'Grass') {
    console.log('You win')
  }
  if (choosenBreed === 'Grass' && wildBreed === 'Water') {
    console.log('You win')
  }
  if (wildBreed === choosenBreed) {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    if (randomNumber >= 5) {
      console.log('You Win')
    } else {
      console.log('You lose')
    }
  }
}

module.exports = {
  getYourPokemonSuccess,
  failure,
  onCatchPokemonSuccess,
  tooManyPokemon,
  onUpdatePokemonSuccess,
  onUpdatePokemonFailure,
  getYourOnePokemonSuccess,
  onRandomBattleSuccess
}
