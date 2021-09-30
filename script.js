//Studio Ghibli API : https://ghibliapi.herokuapp.com/#section/Base-URL

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
  if(res.ok) {
    console.log('We got the goods!')
  } else {
    console.log('This is not the info you are looking for... >.<')
  }
  console.log(filmsData);
  const html = filmsData.map(film => {
    return `
    <div class = 'movies'>
      <p id='heading'>Title: ${film.title}</p>
      <p>Snippet: ${film.description}</p>
    </div>  
    `
  })
  .join('');
  //console.log(html);
  document.querySelector('#films').innerHTML = html;
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