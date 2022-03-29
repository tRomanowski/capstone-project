import { useEffect, useState } from 'react';

import Button from './components/Button';
import MainWrapper from './components/MainWrapper';
import Recipe from './components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const mockURL = 'http://localhost:3001/recipes';

  console.log(recipes);
  useEffect(() => {
    async function getRecipes() {
      try {
        const recipesFromServer = await fetchRecipes();
        console.log(recipesFromServer);
        setRecipes(recipesFromServer);
      } catch (error) {
        console.log(error);
      }
    }

    getRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const response = await fetch(mockURL);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  let randomNumber = Math.floor(Math.random() * 9);

  function handleRandomize() {
    randomNumber = Math.floor(Math.random() * 9);
  }

  return (
    <MainWrapper>
      {recipes.length > 0 && (
        <Recipe
          title={recipes[randomNumber].title}
          image={recipes[randomNumber].image}
          text={recipes[randomNumber].summary}
          url={recipes[randomNumber].sourceUrl}
        />
      )}

      <Button text="Randomize" onRandomize={handleRandomize} />
    </MainWrapper>
  );
}

export default App;
