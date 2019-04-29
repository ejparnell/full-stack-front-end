const store = require('../store.js')
const api = require('./api.js')

const getYourPokemonSuccess = (response) => {
  hideOthers()
  $('.poke-display').html(`
    <img src="full-stack-front-end/assets/scripts/pokemon-pics/Pokeball.png" alt="Pokeball picture" >
    `)
  $('.poke-bag').empty()
  const bag = response.bags
  bag.forEach(bag => {
    $('.poke-bag').show().append(`
      <section data-id="${bag.id}" class="poke-card">
      <img src="assets/scripts/pokemon-pics/${bag.monster.name}.jpg" alt="Picture of ${bag.monster.name}" class="pokemon-pic">
      <p>Name: ${bag.monster.name}</p>
      <p>Type: ${bag.monster.breed}</p>
      <p>Rarity: ${bag.monster.rarity}</p>
      <button type="button" class="delete-pokemon">Remove Pokemon</button>
      </br>
      </section>
      `)
  })
}
const failure = () => {
  $('.poke-message').show().html('Something Went Wrong')
}
const onCatchPokemonSuccess = (response) => {
  console.log(response)
  hideOthers()
  const pokemon = response.bag.monster
  $('.poke-message').show().html(`
    <section class="poke-card">
    <p>You Caught</p>
    <img src="assets/scripts/pokemon-pics/${pokemon.name}.jpg" alt="Picture of ${pokemon.name}" class="pokemon-pic">
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    </section>
    <br>
    `)
  $('.poke-display').html(`
    <img src="full-stack-front-end/assets/scripts/pokemon-pics/Pokeball.png" alt="Pokeball picture" >
    `)
}
const tooManyPokemon = () => {
  console.log('Please relase a pokemon')
  $('.poke-message').show().append(`
    <p>Bag is full</p>
    <p>Would you like to keep this new pokemon?</p>
    <button type="button" class="release-pokemon">Keep Pokemon</button>
  `)
}
const onUpdatePokemonSuccess = () => {
  $('.poke-bag').hide()
  $('.poke-message').hide()
  $('.poke-display').html(`
    <section class="poke-card">
    <img src="assets/scripts/pokemon-pics/${store.monster.name}.jpg" alt="Picture of ${store.monster.name}" class="pokemon-pic">
    <p>You just caught ${store.monster.name}</p>
    <button type="button" class="get-your-pokemon">See Your Pokemon</button>
    </section>
    `)
  store.monster = null
}
const onUpdatePokemonFailure = () => {
  if (store.monster === false) {
    $('.poke-message').show().append('You have to encounter a pokemon to update your bag')
  }
}
const getYourOnePokemonSuccess = (response) => {
  hideOthers()
  $('.poke-display').empty()
  const pokemon = response.bag.monster
  console.log(pokemon)
  $('.poke-display').show().html(`
    <section class="poke-card">
    <p>You Choose</p>
    <img src="assets/scripts/pokemon-pics/${pokemon.name}.jpg" alt="Picture of ${pokemon.name}" class="pokemon-pic">
    <p>Name: ${pokemon.name}</p>
    <p>Type: ${pokemon.breed}</p>
    <p>Rarity: ${pokemon.rarity}</p>
    <button type="button" class="battle-pokemon">Battle!</button>
    <br>
    </section>
    `)
  store.choosenPokemon = response.bag.monster
  console.log(store.choosenPokemon)
}
const onRandomBattleSuccess = (response) => {
  hideOthers()
  store.wildPokemon = response.monster
  const wildBreed = store.wildPokemon.breed
  const choosenBreed = store.choosenPokemon.breed
  battleLogic(wildBreed, choosenBreed)
  console.log(`wild pokemon is ${wildBreed}`)
  console.log(`your pokemon is ${choosenBreed}`)
  $('.poke-display').show().html(`
    <section class="poke-card">
    <p>Your Pokemon is</p>
    <img src="assets/scripts/pokemon-pics/${store.choosenPokemon.name}.jpg" alt="Picture of ${store.choosenPokemon.name}" class="pokemon-pic">
    <p>Name: ${store.choosenPokemon.name}</p>
    <p>Type: ${store.choosenPokemon.breed}</p>
    <p>Rarity: ${store.choosenPokemon.rarity}</p>
    </section>
    </br>
    <section class="poke-card">
    <p>You encounter</p>
    <img src="assets/scripts/pokemon-pics/${store.wildPokemon.name}.jpg" alt="Picture of ${store.wildPokemon.name}" class="pokemon-pic">
    <p>Name: ${store.wildPokemon.name}</p>
    <p>Type: ${store.wildPokemon.breed}</p>
    <p>Rarity: ${store.wildPokemon.rarity}</p>
    </section>
    </br>
    `)
}
const battleLogic = (wildBreed, choosenBreed) => {
  if ((wildBreed === 'Fire' && choosenBreed === 'Grass') || (wildBreed === 'Grass' && choosenBreed === 'Water') ||
 (wildBreed === 'Water' && choosenBreed === 'Fire') || (wildBreed === 'Psychic' && choosenBreed === 'Ground') ||
(wildBreed === 'Ground' && choosenBreed === 'Electric') || (wildBreed === 'Electric' && choosenBreed === 'Psychic')) {
    $('.poke-message').show().html(`You lost!`)
  }
  if ((choosenBreed === 'Water' && wildBreed === 'Fire') || (choosenBreed === 'Fire' && wildBreed === 'Grass') ||
(choosenBreed === 'Grass' && wildBreed === 'Water') || (choosenBreed === 'Psychic' && wildBreed === 'Ground') ||
(choosenBreed === 'Ground' && wildBreed === 'Electric') || (choosenBreed === 'Electric' && wildBreed === 'Psychic')) {
    $('.poke-message').show().html(`You Win!`)
  }
  const randomNumber = Math.floor(Math.random() * 10) + 1
  if (randomNumber >= 5) {
    $('.poke-message').show().html(`<h3>You Win!</h3>`)
  } else {
    $('.poke-message').show().html(`<h3>You lost!</h3>`)
  }
}
const relasePokemonSuccess = (response) => {
  const bag = response.bags
  bag.forEach(bag => {
    $('.poke-bag').show().append(`
      <section data-id="${bag.id}" class="poke-card">
      <img src="assets/scripts/pokemon-pics/${bag.monster.name}.jpg" alt="Picture of ${bag.monster.name}" class="pokemon-pic">
      <p>Name: ${bag.monster.name}</p>
      <p>Type: ${bag.monster.breed}</p>
      <p>Rarity: ${bag.monster.rarity}</p>
      <button type="button" class="update-pokemon">Release Pokemon</button>
      </br>
      </section>
      `)
  })
}
const checkBagLength = (response) => {
  console.log(response)
  if (response.bags.length >= 6) {
    tooManyPokemon()
  } else {
    api.catchPokemon()
      .then(onCatchPokemonSuccess)
  }
}
const getYourBattlePokemonSuccess = (response) => {
  hideOthers()
  $('.poke-bag').empty()
  $('.poke-display').html(`
    <img src="full-stack-front-end/assets/scripts/pokemon-pics/Pokeball.png" alt="Pokeball picture" >
    `)
  const bag = response.bags
  bag.forEach(bag => {
    $('.poke-bag').show().append(`
      <section data-id="${bag.id}" class="poke-card">
      <img src="assets/scripts/pokemon-pics/${bag.monster.name}.jpg" alt="Picture of ${bag.monster.name}" class="pokemon-pic">
      <p>Name: ${bag.monster.name}</p>
      <p>Type: ${bag.monster.breed}</p>
      <p>Rarity: ${bag.monster.rarity}</p>
      <button type="button" class="choose-to-battle-pokemon">Choose to battle</button>
      </br>
      </section>
      `)
  })
}
const onRemovePokemonSuccess = () => {
  hideOthers()
  $('.poke-message').show().html(`<p>You released your Pokemon!</p>`)
  $('.poke-display').html(`
    <img src="full-stack-front-end/assets/scripts/pokemon-pics/Pokeball.png" alt="Pokeball picture" >
    `)
}
const hideOthers = () => {
  $('.pokedex').hide()
  $('.poke-message').hide()
  $('.poke-bag').hide()
}

module.exports = {
  getYourPokemonSuccess,
  failure,
  onCatchPokemonSuccess,
  tooManyPokemon,
  onUpdatePokemonSuccess,
  onUpdatePokemonFailure,
  getYourOnePokemonSuccess,
  onRandomBattleSuccess,
  relasePokemonSuccess,
  checkBagLength,
  onRemovePokemonSuccess,
  getYourBattlePokemonSuccess
}
