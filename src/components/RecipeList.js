import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

export default function RecipeList({ recipes, missingIngredients, onDelete }) {
  return (
    <StyledList role="list" aria-label="Recipes">
      {recipes.map(recipe => {
        return (
          <li key={recipe.id}>
            <Recipe
              title={recipe.title}
              image={recipe.image}
              text={recipe.summary}
              url={recipe.sourceUrl}
              missingIngredients={missingIngredients}
              onDelete={onDelete}
              id={recipe.id}
            />
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
`;
