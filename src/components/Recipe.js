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
  console.log(token);

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
      {extended && <Instructions href={url}>Instructions</Instructions>}
      <Container>
        <span onClick={extendCard}>
          {extended ? 'Close Recipe Info' : 'View Recipe Info'}
        </span>
        {token && onSave && <Button onClick={onSave}>save</Button>}
        <Button remove onClick={onDelete}>
          Delete
        </Button>
      </Container>

      {/* <div>
        <Button onClick={extendCard}>{extended ? 'back' : 'Info'}</Button>
        <Button>
          <a href={url}>Instructions</a>
        </Button>

        {token && onSave && <Button onClick={onSave}>Save</Button>}
        <Button remove text="Delete" onClick={onDelete}>
          Delete
        </Button>
      </div> */}
    </RecipeCard>
  );
}

const RecipeCard = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--shadow-color);
  max-width: 380px;
  margin: 20px 5px 0;

  h2 {
    font-size: 1em;
    padding: 15px;
  }

  img {
    width: 100%;
  }

  span {
    display: block;
    cursor: pointer;
    padding-left: 15px;
    color: var(--primary-color);
  }

  p {
    background-color: #fff;
    color: var(--text-light);
    border-radius: 20px;
    padding: 15px;
  }
  p a {
    color: blue;
  }

  h3 {
    padding: 15px;
  }

  ul {
    padding-left: 15px;
    padding-bottom: 15px;
    list-style: none;
  }
`;

const Instructions = styled.a`
  padding: 15px;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-decoration: underline;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-right: 15px;
  gap: 10px 10px;
  justify-content: space-around;
  align-items: center;
`;
