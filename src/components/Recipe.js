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
      <img src={image} alt="" />
      <h2>{title}</h2>
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
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--shadow-color);

  margin: 20px 5px 0;
  display: grid;
  gap: 20px;
  justify-items: center;

  div {
    display: flex;

    gap: 10px 10px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1em;

    text-align: center;
  }

  img {
    width: 100%;
  }

  span {
    cursor: pointer;
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
