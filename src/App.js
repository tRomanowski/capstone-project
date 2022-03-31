import Form from './components/Form';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';
import { useState } from 'react';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const { REACT_APP_API_KEY } = process.env;
  let urlIngredients = '';

  function onSubmitIngredients(arr) {
    console.log(arr);

    async function getNewRecipe() {
      try {
        if (arr.length === 5) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]},+${arr[3]},+${arr[4]}&number=1`;
        } else if (arr.length === 4) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]},+${arr[3]}&number=1`;
        } else if (arr.length === 3) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]}&number=1`;
        } else if (arr.length === 2) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]}&number=1`;
        } else {
          console.log('Something went wrong!');
        }
        console.log(urlIngredients);
        const response = await fetch(urlIngredients);
        const data = await response.json();
        const recipeID = data[0].id;
        console.log(recipeID);
        let urlID = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${REACT_APP_API_KEY}`;
        const response2 = await fetch(urlID);
        const data2 = await response2.json();
        console.log(data2);
        setRecipes([...recipes, data2]);
      } catch (error) {
        console.log(error);
      }
    }
    getNewRecipe();
  }

  return (
    <MainWrapper>
      <h1>Click the button to get a Random meal</h1>
      <Form onSubmitIngredients={onSubmitIngredients} />
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </MainWrapper>
  );
}
