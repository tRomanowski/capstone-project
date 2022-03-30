import Button from './components/Button';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';
import { useState } from 'react';

function App() {
  const [recipeID, setRecipeID] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const { REACT_APP_API_KEY } = process.env;
  let randomNumber1 = Math.floor(Math.random() * 5);
  let randomNumber2 = Math.floor(Math.random() * 5);
  const ingredients1 = ['tuna', 'beef', 'eggs', 'milk', 'pear'];
  const ingredients2 = ['apple', 'salmon', 'chicken', 'lettuce', 'tofu'];
  const urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredients1[randomNumber1]},+${ingredients2[randomNumber2]}&number=1`;

  function handleRandomize() {
    async function getNewRecipeID() {
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
    getNewRecipeID();

    async function getNewRecipe() {
      try {
        let urlID = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${REACT_APP_API_KEY}`;
        const response = await fetch(urlID);
        const data = await response.json();
        console.log(data);
        setRecipes([...recipes, data]);
      } catch (error) {
        console.log(error);
      }
    }
    getNewRecipe();
  }

  return (
    <MainWrapper>
      <h1>Click the button to get a Random meal</h1>
      <Button text="Randomize" onRandomize={handleRandomize} />
      {typeof recipeID === 'number' && <RecipeList recipes={recipes} />}
    </MainWrapper>
  );
}

export default App;
