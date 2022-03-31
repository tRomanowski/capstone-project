import React from 'react';
import Recipe from './Recipe';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export default function RecipeList({ recipes }) {
  return (
    <StyledList role="list">
      {recipes.map(recipe => {
        return (
          <li key={nanoid()}>
            <Recipe
              title={recipe.title}
              image={recipe.image}
              text={recipe.summary}
              url={recipe.sourceUrl}
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
