import Form from '../components/Form';
import MainWrapper from '../components/MainWrapper';
import Recipe from '../components/Recipe';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Home({ token }) {
  const [recipe, setRecipe] = useState({});
  const [showRecipe, setShowRecipe] = useState(false);

  function onSubmitIngredients(obj) {
    async function getNewRecipe(obj) {
      const responds = await fetch('/api/spoonacular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await responds.json();
      setRecipe(data);
    }
    getNewRecipe(obj);
    setShowRecipe(!showRecipe);
  }

  async function handleDelete() {
    setShowRecipe(false);
    setRecipe({});
    toast.error('Recipe removed!');
  }

  async function handleSave(recipe) {
    const newRecipe = {
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      sourceUrl: recipe.sourceUrl,
      missedIngredients: recipe.missedIngredients,
    };

    await fetch('/api/recipes', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
    toast.success('Recipe saved');
    setRecipe({});
    setShowRecipe(false);
  }

  return (
    <MainWrapper>
      {!showRecipe && <Form onSubmitIngredients={onSubmitIngredients} />}
      {showRecipe && (
        <Recipe
          title={recipe.title}
          image={recipe.image}
          text={recipe.summary}
          url={recipe.sourceUrl}
          missingIngredients={recipe.missedIngredients}
          onDelete={handleDelete}
          onSave={() => handleSave(recipe)}
        />
      )}
    </MainWrapper>
  );
}
