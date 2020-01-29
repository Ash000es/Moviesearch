// selecting page element 
const inputField = document.getElementById('input');
const submit = document.getElementById('submit');
const responseField = document.getElementById('responseField');
const ul= document.getElementById('list');
const text= document.getElementById('filmText');
//const wordQuery = inputField.value;
submit.onclick = () => onSearch();

// information to reach API


// get information 
 


fetch('https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1')  
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.results);
   const {results} =myJson
   console.log(results);
   return results.map(result=> { 
       // console.log(result.poster_path)
        const posterLink= `http://image.tmdb.org/t/p/w185//${result.poster_path}`
        const titleLink= `${result.title}`
let newItem2 = document.createElement("li");
ul.appendChild(newItem2);

let newItem = document.createElement("img");
newItem.src= posterLink;
//let finalTry= document.getElementById('list');
newItem2.appendChild(newItem);

let textItem= document.createElement('span');
textItem.innerHTML= titleLink;
newItem2.appendChild(textItem);
})
});

function onSearch() {
  const wordQuery = inputField.value;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&query=${wordQuery}&page=1&include_adult=false`
  )
  .then(function(response) {
      return response.json();
    })
    .then(function (myJson) {
      const {results} =myJson
      return results.map(result=> { 
          // console.log(result.poster_path)
           const posterLink= `http://image.tmdb.org/t/p/w185//${result.poster_path}`
           const titleLink= `${result.title}`
   let newItem2 = document.createElement("li");
   ul.appendChild(newItem2);
   
   let newItem = document.createElement("img");
   newItem.src= posterLink;
   //let finalTry= document.getElementById('list');
   newItem2.appendChild(newItem);
   
   let textItem= document.createElement('span');
   textItem.innerHTML= titleLink;
   newItem2.appendChild(textItem);
   })
  });
};