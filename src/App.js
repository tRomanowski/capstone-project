import { useEffect, useState } from 'react';

import Button from './components/Button';
import MainWrapper from './components/MainWrapper';
import Recipe from './components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const mockURL = 'http://localhost:3001/recipes';

  // let randomNumber = Math.floor(Math.random() * 9);

  useEffect(() => {
    async function getRecipes() {
      try {
        const recipesFromServer = await fetchRecipes();
        console.log(recipesFromServer);
        setRecipes(recipesFromServer);
        setRandomNumber(Math.floor(Math.random() * 9));
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

  function handleRandomize() {
    setRandomNumber(Math.floor(Math.random() * 9));
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
