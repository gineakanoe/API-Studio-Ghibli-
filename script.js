//Studio Ghibli API : https://ghibliapi.herokuapp.com/#section/Base-URL

//! FILMS
const filmsURL  = 'https://ghibliapi.herokuapp.com/films';

fetchFilms().catch(error => console.log('Error!'));

async function fetchFilms(){
  const res = await fetch(filmsURL);
  const filmsData = await res.json();
  if(res.ok) {
    console.log('We got the goods!')
  } else {
    console.log('This is not the info you are looking for... >.<')
  }
  console.log(filmsData);
  const html = filmsData.map(film => {
    return `
    <div class = 'movies'>
      <p id='heading'>${film.title}</p>
      <p>${film.description}</p>
    </div>  
    `
  })
  .join('');
  //console.log(html);
  document.querySelector('#films').innerHTML = html;
};


//! PEOPLE
const peopleURL  = 'https://ghibliapi.herokuapp.com/people';

fetchPeople().catch(error => console.log('Error!'));

async function fetchPeople(){
  const res = await fetch(peopleURL);
  const peopleData = await res.json();
  if(res.ok) {
    console.log('We got the goods!')
  } else {
    console.log('This is not the info you are looking for... >.<')
  }
  console.log(peopleData);
  const html = peopleData.map(people => {
    return `
    <div class = 'persons'>
      <p id='heading'>${people.name}</p>
      <p>Age: ${people.age}</p>
      <p>Hair: ${people.hair_color}</p>
      <p>Eyes: ${people.eye_color}</p>
    </div>  
    `
  })
  .join('');
  //console.log(html);
  document.querySelector('#people').innerHTML = html;
};



//! LOCATIONS
const locationURL  = 'https://ghibliapi.herokuapp.com/locations';

fetchLocations().catch(error => console.log('Error! But why??? T-T'));

async function fetchLocations(){
  const res = await fetch(locationURL);
  const locationsData = await res.json();
  if(res.ok) {
    console.log('We got the goods!')
  } else {
    console.log('This is not the info you are looking for... >.<')
  }
  console.log(locationsData);
  const html = locationsData.map(location => {
    return `
    <p>Locations have wandered away...<br>Who knows when they'll be back?</p>
    <div class = 'locations'>
      <p id='heading'>Name: ${location.name}</p>
      <p>Climate: ${location.climate}</p>
      <p>Terrain: ${location.terrain}</p>
      <p>Surface Water: ${location.surface_water}</p>
    </div>  
    `
  })
  .join('');
  //console.log(html);
  document.querySelector('#location').innerHTML = html;
};











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