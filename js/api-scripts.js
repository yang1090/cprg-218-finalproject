async function fetchRandomCocktail() {
  try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      displayCocktail(data.drinks[0]);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function displayCocktail(cocktail) {
  const cocktailInfoContainer = document.getElementById('cocktail-info');

  cocktailInfoContainer.innerHTML = '';

  const cocktailName = document.createElement('h2');
  cocktailName.textContent = cocktail.strDrink;

  const cocktailImage = document.createElement('img');
  cocktailImage.src = cocktail.strDrinkThumb;
  cocktailImage.alt = `Image of ${cocktail.strDrink}`;

  const cocktailInstructions = document.createElement('p');
  cocktailInstructions.textContent = `Instructions: ${cocktail.strInstructions}`;

  cocktailInfoContainer.appendChild(cocktailName);
  cocktailInfoContainer.appendChild(cocktailImage);
  cocktailInfoContainer.appendChild(cocktailInstructions);
}

document.getElementById('fetch-cocktail').addEventListener('click', fetchRandomCocktail);

var btnAlert = document.getElementById('btn-alert');
    btnAlert.addEventListener('click', function() {
    alert('Added Successfully!');
})