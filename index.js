// connect to the api to get data.
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
console.log(posterLink);
// create img element and addd posterlink to src
//create div with id of posters in html
// get elementby id of posters 
// append child 
//onclick event 
// input field button. id on both 
// get ele,ent by id 
//on click GamepadButton. function 
//inputfield.value to push to the api 
//`https://api.themoviedb.org/3/search/movie?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&query=${query}&page=1&include_adult=false`

    })
  });
