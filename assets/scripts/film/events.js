const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// User creates a TV Show or Movie to add to #MustWatch list
const onAddFilm = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addFilm(data)
    .then(onGetFilms)
    .catch(ui.addFilmFail)
}

// User views all films on their #MustWatch list, cannot access anyone elses (yet)
const onGetFilms = (events) => {
  // event.preventDefault()
  api.getFilms()
    .then(ui.getFilmsSuccess)
    .catch(ui.getFilmsFail)
}

module.exports = {
  onAddFilm,
  onGetFilms
}
