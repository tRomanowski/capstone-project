import { useEffect, useState } from 'react';

import Form from './components/Form';
import MainWrapper from './components/MainWrapper';
import RecipeList from './components/RecipeList';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('api/recipes')
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          console.error(data);
          return [];
        }
        return data;
      })
      .then(setRecipes);
  }, []);

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

  async function handleSave(recipe) {
    const newRecipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      sourceUrl: recipe.sourceUrl,
      missedIngredients: recipe.missedIngredients,
    };

    await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
    alert('Recipe saved');
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
        <RecipeList
          recipes={recipes}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      )}
    </MainWrapper>
  );
}
