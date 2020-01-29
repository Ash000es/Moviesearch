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
   return results.map(result=> { 
        console.log(result.poster_path)
        const posterLink= `http://image.tmdb.org/t/p/w185//${result.poster_path}`
        const titleLink= `http://image.tmdb.org/t/p/w185//${result.original_title}`
console.log(posterLink);
console.log(titleLink);

let newItem = document.createElement("img");
newItem.src= posterLink;
let finalTry= document.getElementById('imageField');
finalTry.appendChild(newItem);



let newItem2 = document.createElement("li");
ul.appendChild(newItem2);


let textItem= document.createElement('span');
textItem.innerHTML= titleLink;
text.appendChild(textItem);


})
});


 // submit.addEventListener('click', displaySuggestions); 