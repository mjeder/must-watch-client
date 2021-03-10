const store = require('./../store')

const signUpSuccess = (response) => {
  $('form').trigger('reset')
  $('#sign-up-message').html('Account created! Please sign in below!')
  setTimeout(() => {
    $('#sign-up-message').html('')
  }, 5000)
}

const signUpFail = (response) => {
  $('form').trigger('reset')
  $('#sign-up-message').html('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-up-message').html('')
  }, 3000)
}

const signInSuccess = (response) => {
  store.user = response.user
  $('form').trigger('reset')
  $('#welcome-view').hide()
  $('#must-watch-view').show()
  $('#change-password-form').hide()
}

const signInFail = (response) => {
  $('form').trigger('reset')
  $('#sign-in-message').html('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-in-message').html('')
  }, 3000)
}

const changePasswordSuccess = (response) => {
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#change-password-message').html('Password successfully changed!')
  setTimeout(() => {
    $('#change-password-message').html('')
  }, 2000)
}

const changePasswordFail = (response) => {
  $('form').trigger('reset')
  $('#change-password-message').html('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#change-password-message').html('')
  }, 3000)
}

const signOutSuccess = (response) => {
  $('form').trigger('reset')
  $('#must-watch-view').hide()
  $('#welcome-view').show()
  $('#sign-out-success-message').html('Successfully signed out! Thanks for stopping by!')
  setTimeout(() => {
    $('#sign-out-success-message').html('')
  }, 3000)
}

const signOutFail = (response) => {
  $('form').trigger('reset')
  $('#sign-out-fail-message').html('Hmm.. something went wrong. Please, try again.')
  setTimeout(() => {
    $('#sign-out-fail-message').html('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
