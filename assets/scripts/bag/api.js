const config = require('../config.js')
const store = require('../store.js')

const getYourPokemon = function () {
  return $.ajax({
    url: config.apiUrl + `/bags`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const catchPokemon = function () {
  return $.ajax({
    url: config.apiUrl + `/bags`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      bag: {
        user_id: store.user.id,
        monster_id: store.monster.id
      }
    }
  })
}
const removePokemon = function (id) {
  return $.ajax({
    url: config.apiUrl + `/bags/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updatePokemon = function (id) {
  return $.ajax({
    url: config.apiUrl + `/bags/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      bag: {
        user_id: store.user.id,
        monster_id: store.monster.id
      }
    }
  })
}

module.exports = {
  getYourPokemon,
  catchPokemon,
  removePokemon,
  updatePokemon
}
