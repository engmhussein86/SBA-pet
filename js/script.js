import { fetchData , createPetCard } from './api.js';
//https://cat-fact.herokuapp.com
const apiUrlImage = 'https://api.thecatapi.com/v1/images/search';
const apiUrlFacts = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5';

let image=[]; 
let result;

fetchData(apiUrlFacts)
  .then(data => {
    console.log(data);
    result = data;
    

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  fetchData(apiUrlImage)
  .then(data => {
    console.log(data);
    image = data;

    displayCats(result);
   
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

////////////////////////////////////////////////////////////////
  function displayCats(cats){
    const petGallery = document.getElementById('petGallery');

    // Clear existing content
    petGallery.innerHTML = '';

    // Create and append a card for each pet
    cats.forEach(cat => {
        cat.image= image[0].url;
        const card = createPetCard(cat);
        petGallery.appendChild(card);
    });


  }