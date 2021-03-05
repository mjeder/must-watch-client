const store = require('./../store')

const signUpSuccess = (response) => {
  $('form').trigger('reset')
  console.log('SIGN UP SUCCESS')
}

const signUpFail = (response) => {
  $('form').trigger('reset')
  console.log('SIGN UP FAIL')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('form').trigger('reset')
  console.log('SIGN IN SUCCESS')
}

const signInFail = (response) => {
  $('form').trigger('reset')
  console.log('SIGN IN FAIL')
}

const changePasswordSuccess = (response) => {
  $('form').trigger('reset')
  console.log('CHANGE PASSWORD SUCCESS')
}

const changePasswordFail = (response) => {
  $('form').trigger('reset')
  console.log('CHANGE PASSWORD FAIL')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail
}
