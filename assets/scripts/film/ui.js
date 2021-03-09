// const store = require('./../store')

const addFilmSuccess = () => {
  $('form').trigger('reset')
  $('#add-film-message').html('Successfully added to your #MustWatch list!')
  setTimeout(() => {
    $('#change-password-message').html('')
  }, 3000)
}

const addFilmFail = () => {
  $('#add-film-message').html('Failed to add to your #MustWatch list. Please, try again!')
  setTimeout(() => {
    $('#change-password-message').html('')
  }, 3000)
}

const getFilmsSuccess = (response) => {
  const films = response.films
  let filmsHtml = ''
  films.forEach(film => {
    filmsHtml += `
      <h4>${film.title}</h4>
      <p>${film.type} | ${film.genre}</p>
      <p>Streaming on ${film.platform}</p>
      <hr>`
  })
  $('#films-list').html(filmsHtml)
}

const getFilmsFail = () => {
  $('#add-film-message').html('Failed to open your #MustWatch list. Please, try again!')
  setTimeout(() => {
    $('#change-password-message').html('')
  }, 3000)
}

module.exports = {
  addFilmSuccess,
  addFilmFail,
  getFilmsSuccess,
  getFilmsFail
}
