const addFilmSuccess = () => {
  $('form').trigger('reset')
  $('#add-film-message').html('Successfully added to your #MustWatch list!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const addFilmFail = () => {
  $('#add-film-message').html('Failed to add to your #MustWatch list. Please, try again!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const getFilmsSuccess = (response) => {
  const films = response.films
  let filmsHtml = ''
  films.forEach(film => {
    filmsHtml += `
      <h2>${film.title}</2>
      <p>${film.type} | ${film.genre}</p>
      <p>Streaming on ${film.platform}</p>
      <button class='delete-film btn' data-id=${film._id}>Remove</button>   |   <button id='update-film-button' class='btn' data-id=${film._id}>Edit</button>
      <form class="update-film" data-id=${film._id}>
        <input type="text" name="film[title]" placeholder="New Title">
        <input type="text" name="film[type]" placeholder="New Type">
        <input type="text" name="film[genre]" placeholder="New Genre">
        <input type="text" name="film[platform]" placeholder="New Platform">
        <button type="submit" class="update-film btn">Update</button>
      </form>
      <hr>`
  })
  $('#films-list').html(filmsHtml)
  $('.update-film').hide()
  $('#update-film-button').click(function () {
    $('.update-film').show()
  })
  if ($('#films-list').html() === '') {
    $('#films-list').html('You have no films in your #MustWatch list! Add your films by filling out the form above!')
    setTimeout(() => {
      $('#films-list').html('')
    }, 5000)
  }
}

const getFilmsFail = () => {
  $('#add-film-message').html('Failed to open your #MustWatch list. Please, try again!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const deleteFilmSuccess = () => {
  $('#add-film-message').html('Successfully removed from your #MustWatch list!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const deleteFilmFail = () => {
  $('#add-film-message').html('Hmm... something went wrong. Please, try again!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const updateFilmSuccess = () => {
  $('.update-film').hide()
  $('#add-film-message').html('Successfully updated!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

const updateFilmFail = () => {
  $('#add-film-message').html('Hmm... something went wrong. Please, try again!')
  setTimeout(() => {
    $('#add-film-message').html('')
  }, 3000)
}

module.exports = {
  addFilmSuccess,
  addFilmFail,
  getFilmsSuccess,
  getFilmsFail,
  deleteFilmSuccess,
  deleteFilmFail,
  updateFilmSuccess,
  updateFilmFail
}
