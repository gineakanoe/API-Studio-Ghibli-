//Studio Ghibli API : https://ghibliapi.herokuapp.com/#section/Base-URL
//helpful base code tutorial: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
//Don't worry, I'm making it my own ^_~ 


//* Films
const filmsURL  = 'https://ghibliapi.herokuapp.com/films';

fetchFilms().catch(error => console.log('Error!'));

async function fetchFilms(){
  const res = await fetch(filmsURL);
  const filmsData = await res.json();
  console.log(filmsData);
  return filmsData;
}





/*
//TANIA'S CODE FOR REFERENCE---SO I CAN WRAP MY HEAD AROUND THIS

const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';



const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
*/

/*
const baseURL = 'https://ghibliapi.herokuapp.com/';
let url;




let filmsList = document.getElementById('films');

fetch('https://ghibliapi.herokuapp.com/films')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    console.log(json)
    let films = json.results;
})
.catch(function(error) {
    console.log("Error: " + error);
  });


*/



/*

//* Locations
fetch('https://ghibliapi.herokuapp.com/locations')
.then(function(response) {                                    
  return response.json();
})
.then(function(json) {                                        
  console.log(json);
})
.catch(function(error) {                                      
  console.log("Error: " + error);
});
*/

/*
                                              STUDIO GHIBLI APP FAMILY TREE
                                                            ↓
                                                        |Document|
                                                            ↓
                                                          |Body|
                                                            ↓
                                                     |Root aka App|
                                                    ----------------
                                                    ↓              ↓
                                               |Container|   |ErrorMessage|
                                                    ↓
                                            -----------------                                           
                                            ↓               ↓   
                                          |Card|         |     |                                                          
                                            ↓
                                        ---------
                                        ↓       ↓
                                      |h1|     |p|

*/