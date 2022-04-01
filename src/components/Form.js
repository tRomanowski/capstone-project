import Button from './Button';
import styled from 'styled-components';
import { useState } from 'react';

export default function Form({ onSubmitIngredients }) {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [ingredient4, setIngredient4] = useState('');
  const [ingredient5, setIngredient5] = useState('');
  let arr = [];

  function onSubmit(event) {
    event.preventDefault();
    if (
      ingredient1 &&
      ingredient2 &&
      ingredient3 &&
      ingredient4 &&
      ingredient5
    ) {
      arr.push(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5);
    } else if (ingredient1 && ingredient2 && ingredient3 && ingredient4) {
      arr.push(ingredient1, ingredient2, ingredient3, ingredient4);
    } else if (ingredient1 && ingredient2 && ingredient3) {
      arr.push(ingredient1, ingredient2, ingredient3);
    } else if (ingredient1 && ingredient2) {
      arr.push(ingredient1, ingredient2);
    } else {
      alert('You need to put in your first and second ingredient');
      return;
    }

    onSubmitIngredients(arr);

    setIngredient1('');
    setIngredient2('');
    setIngredient3('');
    setIngredient4('');
    setIngredient5('');
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormControl>
        <label htmlFor="first">First Ingredient:</label>
        <input
          id="first"
          type="text"
          placeholder="pasta"
          value={ingredient1}
          onChange={event => setIngredient1(event.target.value)}
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
        />
      </FormControl>
      <FormControl>
        <Button text="Randomize"></Button>
      </FormControl>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  min-width: 399px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #0dde45;
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
  align-items: center;
  margin: 10px 0;

  label {
    text-align: start;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 3px 7px;
    font-size: 17px;

    &valid {
      border-color: blue;
    }

    &invalid {
      background-color: hsl(5, 30%, 80%);
    }
  }
`;
