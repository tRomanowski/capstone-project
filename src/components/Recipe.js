import { nanoid } from 'nanoid';
//import parse from 'html-react-parser';
import styled from 'styled-components';

export default function Recipe({
  title,
  image,
  text,
  url,
  missingIngredients,
}) {
  return (
    <Card>
      <h2>{title}</h2>
      <img src={image} height="200" width="300" alt="" />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      {/*<p>{parse(text)}</p>*/}
      <h3>Missing Ingredients</h3>
      <ul>
        {missingIngredients.map(ingredient => {
          return <li key={nanoid()}>{ingredient.name}</li>;
        })}
      </ul>
      <a href={url}>Instructions</a>
    </Card>
  );
}

const Card = styled.section`
  min-width: 399px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #14fa0f;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  gap: 20px;
  justify-items: center;

  img {
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  p {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    padding: 10px;
    text-align: center;
  }
`;
