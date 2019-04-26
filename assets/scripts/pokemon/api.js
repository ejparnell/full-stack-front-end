const config = require('../config.js')

const getPokemon = function () {
  return $.ajax({
    url: config.apiUrl + `/monsters`,
    method: 'GET'
  })
}
const getOnePokemon = function (id) {
  return $.ajax({
    url: config.apiUrl + `/monsters/${id}`,
    method: 'GET'
  })
}
const getRandomPokemon = function (id) {
  return $.ajax({
    url: config.apiUrl + `/monsters/${id}`,
    method: 'GET'
  })
}

module.exports = {
  getPokemon,
  getOnePokemon,
  getRandomPokemon
}
