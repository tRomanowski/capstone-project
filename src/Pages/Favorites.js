import { useEffect, useState } from 'react';

import MainWrapper from '../components/MainWrapper';
import RecipeList from '../components/RecipeList';

export default function Favorites() {
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

  async function handleDelete(obj) {
    setRecipes(recipes.filter(recipe => recipe._id !== obj._id));
    await fetch('/api/recipes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj._id),
    });
    alert('Recipe deleted');
  }

  return (
    <MainWrapper>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
    </MainWrapper>
  );
}
