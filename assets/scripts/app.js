'use strict'

const authEvents = require('./auth/events')
const filmEvents = require('./film/events')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)

  // #MustWatch List
  $('#add-films').on('submit', filmEvents.onAddFilm)
  $('#open-list').on('click', filmEvents.onGetFilms)
  $('#films-list').on('click', '.delete-film', filmEvents.onDeleteFilm)
  // $('#update-film-button').on('click').show('.update-film')
  $('#films-list').on('submit', '.update-film', filmEvents.onUpdateFilm)
})
