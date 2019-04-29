const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up-modal').hide()
  $('#sign-in-modal').show()
}

const signUpFailure = function (error) {
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#sign-in-modal').hide()
  $('.page-mask').hide()
}

const signInFailure = function (error) {
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
  $('#sign-in-modal').show()
}

const signOutFailure = function (error) {
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  console.log('changePasswordSuccess ran and nothing was returned!')
  $('#change-password-modal').hide()
}

const changePasswordFailure = function (error) {
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
