import { useEffect, useState } from 'react';

import Button from './components/Button';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';

function App() {
  const [recipeID, setRecipeID] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const { REACT_APP_API_KEY } = process.env;
  const ingredents = ['apple', 'flour'];
  const urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredents[0]},+${ingredents[1]}&number=1`;
  const urlID = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${REACT_APP_API_KEY}`;

  useEffect(() => {
    async function getRecipeID() {
      try {
        const response = await fetch(urlIngredients);
        const data = await response.json();
        const recipeID = data[0].id;
        console.log(recipeID);
        setRecipeID(recipeID);
      } catch (error) {
        console.log(error);
      }
    }

    getRecipeID();
  }, [urlIngredients]);

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await fetch(urlID);
        const data = await response.json();
        console.log(data);
        setRecipes([...recipes, data]);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipe();
  }, [urlID]);

  function handleRandomize() {}

  return (
    <MainWrapper>
      <Button text="Randomize" onRandomize={handleRandomize} />
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </MainWrapper>
  );
}

export default App;
