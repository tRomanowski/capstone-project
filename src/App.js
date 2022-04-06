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
    //     //  FAILED FETCH / if invalid ingredients where send, API responds with an empty array.
    //     if (data.length === 0) {
    //       setRecipes([
    //         ...recipes,
    //         {
    //           title: 'Sorry there was no recipe found for you!',
    //           image: 'https://source.unsplash.com/random/?food',
    //           summary: 'Please fill in some other ingedients!',
    //           url: 'https://www.google.com',
    //         },
    //       ]);
    //       setMissingIngredients([{ name: 'Everything' }]);
    //     } else {
    //       let randomNumber = Math.floor(Math.random() * 5);
    //       setMissingIngredients(data[randomNumber].missedIngredients);
    //       let urlID = `https://api.spoonacular.com/recipes/${data[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`;
    //       const response2 = await fetch(urlID);
    //       const data2 = await response2.json();
    //       console.log(data2);
    //       setRecipes([...recipes, data2]);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getNewRecipe();
  }
  function handleDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

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
