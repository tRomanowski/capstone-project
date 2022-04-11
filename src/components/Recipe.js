import Button from './Button';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { useState } from 'react';

export default function Recipe({
  title,
  image,
  text,
  url,
  missingIngredients,
  onDelete,
  onSave,
}) {
  const [extended, setExtended] = useState(false);

  function extendCard() {
    setExtended(!extended);
  }
  return (
    <RecipeCard>
      <h2>{title}</h2>
      <img src={image} height="200" width="300" alt="" />
      {extended && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
      {extended && <h3>Missing Ingredients</h3>}
      {extended && (
        <ul aria-label="missing ingredients">
          {missingIngredients?.map(ingredient => {
            return <li key={nanoid()}>{ingredient.name}</li>;
          })}
        </ul>
      )}
      <span onClick={extendCard}>{extended ? 'back' : 'Info'}</span>
      <a href={url}>Instructions</a>
      <div>
        {onSave && <Button text="Save" onClick={onSave} />}
        <Button remove text="Delete" onClick={onDelete} />
      </div>
    </RecipeCard>
  );
}

const RecipeCard = styled.section`
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
