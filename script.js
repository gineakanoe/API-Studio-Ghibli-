//Studio Ghibli API : https://ghibliapi.herokuapp.com/#section/Base-URL
//helpful base code tutorial: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
//Don't worry, I'm making it my own ^_~ 

const baseURL = 'https://ghibliapi.herokuapp.com/';
let url;




//* Films
const filmsURL  = 'https://ghibliapi.herokuapp.com/films';

const filmsSection = document.getElementById('films');
const container = document.createElement('div');
container.setAttribute('class', 'container');

filmsSection.appendChild(container);

fetchFilms().catch(error => console.log('Error!'));

async function fetchFilms(){
  const res = await fetch(filmsURL);
  const filmsData = await res.json();
//  if(res.ok) {
//    console.log('We got the goods!')
//  } else {
//    console.log('This is not the info you are looking for... >.<')
//  }
  console.log(filmsData);
};

function displayResults(json) {
let data = json.parse(this.response)
if(res.ok){
  data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    });
};
};


/*
var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
};

request.send()







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