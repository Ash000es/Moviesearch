const results1 = []

const sortMyResults1 = document.getElementById('button1')
const sortMyResults2 = document.getElementById('button2')
const sortMyResults3 = document.getElementById('button3')
sortMyResults1.addEventListener('click', () => sortVotecount(results1))
sortMyResults2.addEventListener('click', () => releaseDate(results1))
sortMyResults3.addEventListener('click', () => sortVoteAverage(results1))

// Render results function

function displayResults(arr) {
  return arr.map(subarr => {
    //console.log(subarr.poster_path)
    const table = document.getElementById('table')
    if (!subarr.poster_path) return
    const posterLink = `http://image.tmdb.org/t/p/w185//${subarr.poster_path}`

    let newItem = document.createElement('img')
    // 1. when you click on the poster then log to the console.
    //2. get the movie overview info
    newItem.addEventListener('click', () => onClickPoster(subarr.overview))
    newItem.src = posterLink
    table.appendChild(newItem)

    /*const movieTitle = document.getElementById('title')
    const titleLink = `${result.title}`
    let titleBelow = document.createElement('span')
    titleBelow.innerHTML = titleLink
    movieTitle.appendChild(titleBelow)*/
  })
}

// default fetch by popularity
fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1'
)
  .then(function(response) {
    return response.json()
  })
  .then(myJson => {
    console.log(myJson)
    const {results} = myJson
    results1.push(results)

    console.log(results)
    return displayResults(results)
  })

setTimeout(function() {
  console.log(results1)
}, 3000)

// fetch with keywords

function onSearch() {
  const inputField = document.getElementById('input')
  const wordQuery = inputField.value
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&query=${wordQuery}&page=1&include_adult=false`
  )
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      const {results} = myJson
      console.log(results)
      table.innerHTML = ''
      return displayResults(results)
    })
}

// search eventlistner
const submit = document.getElementById('submit')
submit.onclick = () => onSearch()

// 3 sort functions

function releaseDate(arr) {
  table.innerHTML = ''
  console.log(arr)
  arr.map(elment => {
    elment.sort(function(a, b) {
      let newDate = Date.parse(a.release_date)
      let newDate2 = Date.parse(b.release_date)

      return newDate2 - newDate
    })
    return displayResults(elment)
  })
}

function sortVotecount(arr) {
  table.innerHTML = ''
  console.log(arr)
  arr.map(elment => {
    console.log(elment)
    elment.sort(function(a, b) {
      return b.vote_count - a.vote_count
      console.log(elment)
    })
    return displayResults(elment)
  })
}

function sortVoteAverage(arr) {
  table.innerHTML = ''
  console.log(arr)
  arr.map(elment => {
    console.log(elment)
    elment.sort(function(a, b) {
      return b.vote_average - a.vote_average
      console.log(elment)
    })
    return displayResults(elment)
  })
}

// event listners and thier const

// display and animation function

//3. create an empty pop up
const info = document.getElementById('info')
const infoWrapper = document.getElementById('infoWrapper')

//add the animated class to the popupwrapper
//set onclick for the popup wrapper*/
function onClickPoster(plot) {
  info.innerHTML = plot
  //4. add movie overview info to the pop up
  infoWrapper.style.display = 'block'
  // 5. animate the pop up
  infoWrapper.classList.add('animated', 'fadeIn')
  info.classList.add('animated', 'fadeIn')
  infoWrapper.style.display = 'flex'
  //6 close the pop when clicking outside
  infoWrapper.onclick = () => {
    infoWrapper.style.display = 'none'
  }
}
