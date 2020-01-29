// selecting page element 
const inputField = document.getElementById('input');
const submit = document.getElementById('submit');
const responseField = document.getElementById('responseField');
const ul= document.getElementById('list');
const text= document.getElementById('filmText');
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
        const titleLink= `http://image.tmdb.org/t/p/w185//${result.original_title}`
console.log(posterLink);
let newItem = document.createElement("img")
let newItem2 = document.createElement("li")
let textItem= document.createElement('span')
newItem.src= 'posterLink'
textItem.innerHTML= 'titleLink'
parent.appendChild(child);
newItem2.appendChild(newItem);
ul.appendChild(newItem2);
newItem.appendChild(textItem);

})
})
.catch(function(error) {
  console.log(error)
});

 // submit.addEventListener('click', displaySuggestions); 