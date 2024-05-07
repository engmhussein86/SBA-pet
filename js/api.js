export async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }


  export function createPetCard(pet) {
    // Create a card element
    const card = document.createElement('div');
    card.classList.add('pet-card');

    // Create and append elements for pet details (e.g., name, image)
    // Customize this based on the structure of your API's response

    const image = document.createElement('img');
    image.setAttribute('src', pet.image);
    const name = document.createElement('h4');
    name.textContent = pet.text;
    card.appendChild(image);
    card.appendChild(name);

    // Create and append more elements as needed

    return card;
}