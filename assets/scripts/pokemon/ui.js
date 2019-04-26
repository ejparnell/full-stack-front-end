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
    <br>
    `)
}

module.exports = {
  onGetPokemonSuccess,
  onGetPokemonFailure,
  onGetOnePokemonSuccess,
  onGetOnePokemonFailure,
  getRandomPokemonSuccess
}
