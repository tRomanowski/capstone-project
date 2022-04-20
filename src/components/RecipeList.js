import React from 'react';
import Recipe from './Recipe';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export default function RecipeList({ recipes, onDelete }) {
  return (
    <StyledList role="list" aria-label="Recipes">
      {recipes.map(recipe => {
        return (
          <li key={nanoid()}>
            <Recipe
              title={recipe.title}
              image={recipe.image}
              text={recipe.summary}
              url={recipe.sourceUrl}
              missingIngredients={recipe.missedIngredients}
              onDelete={() => onDelete(recipe)}
            />
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5em;
`;
