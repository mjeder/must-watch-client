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

module.exports = {
  addFilm,
  getFilms
}
