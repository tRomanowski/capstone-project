import TinderCard from 'react-tinder-card';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export default function FetchedRecipe({
  title,
  image,
  text,
  url,
  missingIngredients,
  onDelete,
  onSave,
}) {
  const onSwipe = direction => {
    console.log('You swiped: ' + direction);

    if (direction === 'left') {
      onDelete();
    }

    if (direction === 'right') {
      onSave();
    }
  };

  return (
    <RecipeCard onSwipe={onSwipe} preventSwipe={['up', 'down']}>
      <h2>{title}</h2>
      <img src={image} height="200" width="300" alt="" />
      <h3>Missing Ingredients</h3>
      <ul aria-label="missing ingredients">
        {missingIngredients?.map(ingredient => {
          return <li key={nanoid()}>{ingredient.name}</li>;
        })}
      </ul>
      <a href={url}>Instructions</a>
    </RecipeCard>
  );
}

const RecipeCard = styled(TinderCard)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #65a603;
  padding: 20px;
  margin: 20px 5px 0;
  display: grid;
  gap: 20px;
  justify-items: center;

  span {
    cursor: pointer;
  }

  img {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  p {
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    padding: 10px;
    text-align: center;
  }
  p a {
    color: blue;
  }

  a {
    color: #dfe2f2;
  }
`;
