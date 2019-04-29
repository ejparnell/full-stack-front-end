const store = require('../store')

const signUpSuccess = function (data) {
  // $('form').trigger('reset')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up-modal').hide()
  $('#sign-in-modal').show()
}

const signUpFailure = function (error) {
  $('form').trigger('reset')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
//  $('form').trigger('reset')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#sign-in-modal').hide()
  $('.page-mask').hide()
}

const signInFailure = function (error) {
  $('form').trigger('reset')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
  $('#sign-in-modal').show()
}

const signOutFailure = function (error) {
  $('form').trigger('reset')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('.poke-message').show().html(`<h3>Your Password has been changed!</h3>`)
  $('#change-password-modal').hide()
}

const changePasswordFailure = function (error) {
  $('form').trigger('reset')
  console.error('changePasswordFailure ran. Error is :', error)
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
