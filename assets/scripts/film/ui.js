// const store = require('./../store')

const addFilmFail = () => {
  // $('form').trigger('reset')
  console.log('failed to create film')
}

const getFilmsSuccess = (response) => {
  console.log(response)
}

const getFilmsFail = () => {
  console.log('failed to show films')
}

module.exports = {
  addFilmFail,
  getFilmsSuccess,
  getFilmsFail
}
