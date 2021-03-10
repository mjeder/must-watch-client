const config = require('./../config')
const store = require('./../store')

const addFilm = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/films',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getFilms = (data) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/films',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteFilm = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/films/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateFilm = (id, data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/films/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addFilm,
  getFilms,
  deleteFilm,
  updateFilm
}
