import Button from './Button';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Form({ onSubmitIngredients }) {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [ingredient4, setIngredient4] = useState('');
  const [ingredient5, setIngredient5] = useState('');
  let ingredients = {};

  function onSubmit(event) {
    event.preventDefault();
    if (
      ingredient1 &&
      ingredient2 &&
      ingredient3 &&
      ingredient4 &&
      ingredient5
    ) {
      ingredients.ingredient1 = ingredient1;
      ingredients.ingredient2 = ingredient2;
      ingredients.ingredient3 = ingredient3;
      ingredients.ingredient4 = ingredient4;
      ingredients.ingredient5 = ingredient5;
    } else if (ingredient1 && ingredient2 && ingredient3 && ingredient4) {
      ingredients.ingredient1 = ingredient1;
      ingredients.ingredient2 = ingredient2;
      ingredients.ingredient3 = ingredient3;
      ingredients.ingredient4 = ingredient4;
    } else if (ingredient1 && ingredient2 && ingredient3) {
      ingredients.ingredient1 = ingredient1;
      ingredients.ingredient2 = ingredient2;
      ingredients.ingredient3 = ingredient3;
    } else if (ingredient1 && ingredient2) {
      ingredients.ingredient1 = ingredient1;
      ingredients.ingredient2 = ingredient2;
    } else {
      toast.error('You need to put in your first and second ingredient');
      return;
    }

    onSubmitIngredients(ingredients);

    setIngredient1('');
    setIngredient2('');
    setIngredient3('');
    setIngredient4('');
    setIngredient5('');
  }

  return (
    <>
      <StyledForm onSubmit={onSubmit} aria-label="search for recipe" id="form">
        <FormControl>
          <label htmlFor="first">First Ingredient:</label>
          <input
            id="first"
            type="text"
            placeholder="pasta"
            value={ingredient1}
            onChange={event => setIngredient1(event.target.value)}
            pattern="[^' ']+"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="second">Second Ingredient:</label>
          <input
            id="second"
            type="text"
            placeholder="chicken"
            value={ingredient2}
            onChange={event => setIngredient2(event.target.value)}
            pattern="[^' ']+"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="third">Third Ingredient:</label>
          <input
            id="third"
            type="text"
            placeholder="broccoli"
            value={ingredient3}
            onChange={event => setIngredient3(event.target.value)}
            pattern="[^' ']+"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="fourth">Fourth Ingredient:</label>
          <input
            id="fourth"
            type="text"
            placeholder="tuna"
            value={ingredient4}
            onChange={event => setIngredient4(event.target.value)}
            pattern="[^' ']+"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="fifth">Fifth Ingredient:</label>
          <input
            id="fifth"
            type="text"
            placeholder="capers"
            value={ingredient5}
            onChange={event => setIngredient5(event.target.value)}
            pattern="[^' ']+"
          />
        </FormControl>
      </StyledForm>
      <Button type="submit" form="form">
        randomize
      </Button>
    </>
  );
}

const StyledForm = styled.form`
  border-radius: 5px;
  box-shadow: 0 3px 6px var(--shadow-color);
  background-color: var(--primary-color);
  padding: 13px 20px 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;

  label {
    text-align: start;
    color: var(--text-color);
  }
  input {
    border-radius: 5px;
    width: 100%;
    height: 40px;
    padding: 3px 7px;
    font-size: 17px;
    border: 2px solid var(--background-color);
  }
`;
