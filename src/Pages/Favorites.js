import { useEffect, useState } from 'react';

import PacmanLoader from 'react-spinners/PacmanLoader';
import RecipeList from '../components/RecipeList';
import { css } from '@emotion/react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const override = css`
  position: fixed;
  top: 50%;
  left: calc(50% - 25px);
`;

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
    <>
      {!token && (
        <StyledCard>
          <h2>Info</h2>
          <p>You need to be logged in to save your favorite recipes!</p>
        </StyledCard>
      )}
      {token && recipes.length === 0 && (
        <PacmanLoader color="#65a603" css={override} />
      )}
      <RecipeList recipes={recipes} onDelete={handleDelete} />
    </>
  );
}

const StyledCard = styled.section`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  background-color: var(--background-color);
  color: var(--text-light);
  padding: 10px;
  margin: 20px 5px 0;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 200px;

  p {
    background-color: #fff;
    color: var(--primary-color);
    border-radius: 3px;

    padding: 10px;

    margin-top: -30px;
  }

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }
`;
