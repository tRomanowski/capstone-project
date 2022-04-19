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
  token,
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

      <div>
        <Button onClick={extendCard}>{extended ? 'back' : 'Info'}</Button>
        <Button>
          <a href={url}>Instructions</a>
        </Button>

        {token && onSave && <Button onClick={onSave}>Save</Button>}
        <Button remove text="Delete" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </RecipeCard>
  );
}

const RecipeCard = styled.section`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #65a603;
  padding: 10px;
  margin: 20px 5px 0;
  display: grid;
  gap: 20px;
  justify-items: center;

  div {
    width: 300px;
    display: flex;

    gap: 10px 10px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }

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
    color: #000;
  }
`;
