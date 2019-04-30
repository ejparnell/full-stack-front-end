const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-up-modal').hide()
  $('#sign-in-modal').show()
  $('.welcome-sign-in').text('Success now Sign In!')
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('.welcome-sign-up').text('Please try again')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user
  $('#sign-in-modal').hide()
  $('.page-mask').hide()
  $('.poke-message').text(`Welcome ${store.user.email}`)
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('.welcome-sign-in').text('Please try again')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  store.user = null
  $('.pokedex').hide()
  $('.poke-message').hide()
  $('.poke-bag').hide()
  $('.page-mask').show()
  $('.side-bar').width('0%')
  $('#sign-in-modal').show()
  $('.poke-display').html(`
      <img src="public/pokemon-pics/Pokeball.png" alt="Pokeball picture" >
      `)
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.poke-message').text(`Please try again`)
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('.poke-message').show().html(`<h3>Your Password has been changed!</h3>`)
  $('#change-password-modal').hide()
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('.poke-message').text(`Please try again`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
