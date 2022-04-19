import { useEffect, useState } from 'react';

import MainWrapper from '../components/MainWrapper';
import RecipeList from '../components/RecipeList';
import { toast } from 'react-toastify';

export default function Favorites({ token }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('api/recipes', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          console.error(data);
          return [];
        }

        return data;
      })
      .then(setRecipes);
  }, [token]);

  async function handleDelete(obj) {
    setRecipes(recipes.filter(recipe => recipe.title !== obj.title));
    await fetch('/api/recipes/delete', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: obj.title }),
    });
    toast.error('Recipe deleted');
  }

  return (
    <MainWrapper>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
    </MainWrapper>
  );
}
