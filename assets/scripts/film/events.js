const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// User views all films on their #MustWatch list, cannot access anyone elses (yet)
const onGetFilms = (event) => {
  api.getFilms()
    .then(ui.getFilmsSuccess)
    .catch(ui.getFilmsFail)
}

// User creates a TV Show or Movie to add to #MustWatch list
const onAddFilm = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addFilm(data)
    .then(ui.addFilmSuccess)
    .then(onGetFilms)
    .catch(ui.addFilmFail)
}

// User deletes film off #MustWatch list
const onDeleteFilm = (event) => {
  event.preventDefault()
  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  api.deleteFilm(id)
    .then(ui.deleteFilmSuccess)
    .then(onGetFilms)
    .catch(ui.deleteFilmFail)
}

// User updates a film on their #MustWatch list
const onUpdateFilm = (event) => {
  event.preventDefault()
  const updateForm = event.target
  const id = $(updateForm).data('id')
  const formData = getFormFields(updateForm)
  api.updateFilm(id, formData)
    .then(ui.updateFilmSuccess)
    .then(onGetFilms)
    .catch(ui.updateFilmFail)
}

module.exports = {
  onGetFilms,
  onAddFilm,
  onDeleteFilm,
  onUpdateFilm
}
