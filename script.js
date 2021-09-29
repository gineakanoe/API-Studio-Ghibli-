//Studio Ghibli API : https://ghibliapi.herokuapp.com/#section/Base-URL
//helpful base code tutorial: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
//Don't worry, I'm making it my own ^_~ 


const baseURL = 'https://ghibliapi.herokuapp.com/';
let url;


let filmsList = document.getElementById('films');

fetch('https://ghibliapi.herokuapp.com/films')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    //console.log(json)
    let films = json.results;
});


