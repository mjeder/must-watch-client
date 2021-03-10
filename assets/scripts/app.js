'use strict'

const authEvents = require('./auth/events')
const filmEvents = require('./film/events')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#pw-button').on('click', authEvents.showChangePassword)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // #MustWatch List
  $('#add-films').on('submit', filmEvents.onAddFilm)
  $('#open-list').on('click', filmEvents.onGetFilms)
  $('#films-list').on('click', '.delete-film', filmEvents.onDeleteFilm)
  $('#films-list').on('submit', '.update-film', filmEvents.onUpdateFilm)

  // Initial View
  $('#must-watch-view').hide()
})
