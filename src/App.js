import { Route, Routes } from 'react-router-dom';

import Favorites from './Pages/Favorites';
import Home from './Pages/Home';

export default function App() {
  // function onSubmitIngredients(obj) {
  //   async function getNewRecipe() {
  //     const responds = await fetch('/api/spoonacular', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(obj),
  //     });
  //     const data = await responds.json();
  //     setRecipes([...recipes, data]);
  //   }
  //   getNewRecipe();
  // }
  // async function handleDelete(obj) {
  //   setRecipes(recipes.filter(recipe => recipe.id !== obj.id));
  //   await fetch('/api/recipes', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(obj._id),
  //   });
  //   alert('Recipe deleted');
  // }

  // async function handleSave(recipe) {
  //   const newRecipe = {
  //     id: recipe.id,
  //     title: recipe.title,
  //     image: recipe.image,
  //     summary: recipe.summary,
  //     sourceUrl: recipe.sourceUrl,
  //     missedIngredients: recipe.missedIngredients,
  //   };

  //   await fetch('/api/recipes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newRecipe),
  //   });
  //   alert('Recipe saved');
  // }
  // console.log(recipes);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
