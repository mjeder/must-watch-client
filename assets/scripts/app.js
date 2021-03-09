'use strict'

const authEvents = require('./auth/events')
const filmEvents = require('./film/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('#add-films').on('submit', filmEvents.onAddFilm)
})
