import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

export default function RecipeList({ recipes }) {
  return (
    <StyledList>
      {recipes.map(recipe => {
        return (
          <li key={recipe.id}>
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
`;
