
let results= [],



// Render results function

function displayResults(arr) {
  return arr.map(subarr => {
    //console.log(subarr.poster_path)
    const table = document.getElementById('table');
    if (!subarr.poster_path) return
    const posterLink = `http://image.tmdb.org/t/p/w185//${subarr.poster_path}`

    let newItem = document.createElement('img')
    newItem.src = posterLink
    table.appendChild(newItem)

    /*const movieTitle = document.getElementById('title');
    const titleLink= `${result.title}`
    let titleBelow= document.createElement('span');
     titleBelow.innerHTML= titleLink;
     movieTitle.appendChild(titleBelow);*/
    //

  })
}

// default fetch by popularity 
fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1'
)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    // console.log(myJson);
    const {results} = myJson
    console.log(results)
    return displayResults(results)
  })
  
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
const submit = document.getElementById('submit');
submit.onclick = () => onSearch();

// 3 sort functions 

function releaseDate(results) {
  if (!results.length) return
  table.innerHTML = ''
  results.sort((a, b) => {
    let newDate = Date.parse(a.release_date)
    let newDate2 = Date.parse(b.release_date)
    return newDate > newDate2 ? -1 : 1
    console.log(arr)
  })
  return displayResults(arr)
}

function sortVotecount(arr) {
  table.innerHTML = ''
  arr.sort((a, b) => {
    return a.vote_count > b.vote_count ? -1 : 1
    console.log(arr)
  })
  return displayResults(arr)
}

function sortVoteAverage(arr) {
  table.innerHTML = ''
  arr.sort((a, b) => {
    return a.vote_average > b.vote_average ? -1 : 1
    console.log(arr)
  })
  return displayResults(arr)
}



// event listners and thier const 
function dropdownActions(arr) {
    
  const sortMyResults1 = document.getElementById('button1');
  const sortMyResults2 = document.getElementById('button2');
  const sortMyResults3 = document.getElementById('button3');
  sortMyResults1.addEventListener('click', () => sortVotecount(arr));
  sortMyResults2.addEventListener('click', () => releaseDate(arr));
  sortMyResults3.addEventListener('click', () => sortVoteAverage(arr));
      
      };



/* display and animation function

const popup = document.getElementById('popup');
const popupWraper = document.getElementById('popupWraper');*/
//

    // 1. when you click on the poster then log to the console.
    //2. get the movie overview info
    //3. create an empty pop up
    //4. add movie overview info to the pop up
    // 5. animate the pop up
    //6 close the pop when clicking outside

//add the animated class to the popupwrapper
//set onclick for the popup wrapper*/
/*
function onClickPoster(plot) {
  // show info
  popup.innerHTML = plot
  popupwraper.style.display = 'block'
  popupwraper.classList.add('animated', 'fadeIn')
  popup.classList.add('animated', 'fadeIn')
  // popupwraper.style.display = 'flex'
  popupwraper.onclick = () => {
    console.log('hi')
    popupwraper.style.display = 'none'
  }
}*/







 





