import Form from './components/Form';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';
import { useState } from 'react';

// const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [recipes, setRecipes] = useState([]);
  // // const { data, error } = useSWR('/api', fetcher);

  // if (error) return <h1>Sorry, could not fetch</h1>;

  function onSubmitIngredients(obj) {
    async function getNewRecipe() {
      const responds = await fetch('/api/spoonacular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await responds.json();
      setRecipes([...recipes, data]);
    }
    getNewRecipe();
  }
  function handleDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  console.log(recipes);
  return (
    <MainWrapper>
      <h1>Randomealizer</h1>
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
        <RecipeList recipes={recipes} onDelete={handleDelete} />
      )}
    </MainWrapper>
  );
}
