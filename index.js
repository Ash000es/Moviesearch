// selecting page element 
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
// information to reach API
const url= 'https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1'
const wordQuery = inputField.value;

// get information 

  const endpoint = `${url}${wordQuery}`;

fetch('https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.results);
   const {results} =myJson
    results.map(result=> { 
        console.log(result.poster_path)
        const posterLink= `http://image.tmdb.org/t/p/w185//${result.poster_path}`
console.log(posterLink);})
  })
.then (function displaySuggestions (posterLink){
  let newItem = document.createElement("img");
  newItem.src = posterLink;
  let ul = document.getElementById("imageField");
  ul.appendChild(newItem) 
      });

  submit.addEventListener('click', displaySuggestions);