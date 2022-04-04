import { loadFromLocal, saveToLocal } from './utilityFunctions/localStorage';
import { useEffect, useState } from 'react';

import Form from './components/Form';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';

export default function App() {
  const [recipes, setRecipes] = useState(loadFromLocal('recipes') ?? []);
  const [missingIngredients, setMissingIngredients] = useState([]);
  const { REACT_APP_API_KEY } = process.env;
  let urlIngredients = '';

  useEffect(() => {
    saveToLocal('recipes', recipes);
  }, [recipes]);

  function onSubmitIngredients(arr) {
    async function getNewRecipe() {
      try {
        // Check which URL should be send depending and number of ingredients
        if (arr.length === 5) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]},+${arr[3]},+${arr[4]}&number=5`;
        } else if (arr.length === 4) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]},+${arr[3]}&number=5`;
        } else if (arr.length === 3) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]},+${arr[2]}&number=5`;
        } else if (arr.length === 2) {
          urlIngredients = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]}&number=5`;
        } else {
          console.log('Something went wrong!');
        }
        console.log(urlIngredients);
        const response = await fetch(urlIngredients);
        const data = await response.json();
        console.log(data);
        //  FAILED FETCH / if invalid ingredients where send, API responds with an empty array.
        if (data.length === 0) {
          setRecipes([
            ...recipes,
            {
              title: 'Sorry there was no recipe found for you!',
              image: 'https://source.unsplash.com/random/?food',
              summary: 'Please fill in some other ingedients!',
              url: 'https://www.google.com',
            },
          ]);
          setMissingIngredients([{ name: 'Everything' }]);
        } else {
          let randomNumber = Math.floor(Math.random() * 5);
          setMissingIngredients(data[randomNumber].missedIngredients);
          let urlID = `https://api.spoonacular.com/recipes/${data[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`;
          const response2 = await fetch(urlID);
          const data2 = await response2.json();
          console.log(data2);
          setRecipes([...recipes, data2]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getNewRecipe();
  }
  console.log(recipes);
  console.log(missingIngredients);

  function handleDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <MainWrapper>
      <h1>Randomizer</h1>
      <p>
        Put in some ingredients you have at your disposal and get a great recipe
        idea.
      </p>
      <p>
        Please fill in just a single ingredient per field. Its has to be just
        one word!
      </p>
      <Form onSubmitIngredients={onSubmitIngredients} />
      {recipes.length > 0 && (
        <RecipeList
          recipes={recipes}
          missingIngredients={missingIngredients}
          onDelete={handleDelete}
        />
      )}
    </MainWrapper>
  );
}
