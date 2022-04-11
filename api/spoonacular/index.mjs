import fetch from 'node-fetch';
const { REACT_APP_API_KEY } = process.env;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } =
      req.body;
    const randomNumber = Math.floor(Math.random() * 5);
    // if form input is submitted with 5 ingredients then fetch this
    if (
      ingredient1 &&
      ingredient2 &&
      ingredient3 &&
      ingredient4 &&
      ingredient5
    ) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3},+${ingredient4},+${ingredient5}&number=5`
      );
      const predata = await responds.json();
      // if fetch failed and response is an empty array then return template recipe
      if (predata.length === 0) {
        let data = {
          title: 'Sorry there was no recipe found for you!',
          image: 'https://source.unsplash.com/random/?food',
          summary: 'Please fill in some other ingedients!',
          url: 'https://www.google.com',
          missedIngredients: [{ name: 'everything' }],
        };
        res.status(200).json(data);
        return;
      }

      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, ...predata[randomNumber] };
      res.status(200).json(data);
      return;
    }
    // if form input is submitted with 4 ingredients then fetch this
    if (ingredient1 && ingredient2 && ingredient3 && ingredient4) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3},+${ingredient4}&number=5`
      );
      const predata = await responds.json();
      // if fetch failed and response is an empty array then return template recipe
      if (predata.length === 0) {
        let data = {
          title: 'Sorry there was no recipe found for you!',
          image: 'https://source.unsplash.com/random/?food',
          summary: 'Please fill in some other ingedients!',
          url: 'https://www.google.com',
          missedIngredients: [{ name: 'everything' }],
        };
        res.status(200).json(data);
        return;
      }

      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, ...predata[randomNumber] };
      res.status(200).json(data);
      return;
    }
    // if form input is submitted with 3 ingredients then fetch this
    if (ingredient1 && ingredient2 && ingredient3) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3}&number=5`
      );
      const predata = await responds.json();
      // if fetch failed and response is an empty array then return template recipe
      if (predata.length === 0) {
        let data = {
          title: 'Sorry there was no recipe found for you!',
          image: 'https://source.unsplash.com/random/?food',
          summary: 'Please fill in some other ingedients!',
          url: 'https://www.google.com',
          missedIngredients: [{ name: 'everything' }],
        };
        res.status(200).json(data);
        return;
      }

      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, ...predata[randomNumber] };
      res.status(200).json(data);
      return;
    }
    // if form input is submitted with 2 ingredients then fetch this
    if (ingredient1 && ingredient2) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2}&number=5`
      );
      const predata = await responds.json();
      // if fetch failed and response is an empty array then return template recipe
      if (predata.length === 0) {
        let data = {
          title: 'Sorry there was no recipe found for you!',
          image: 'https://source.unsplash.com/random/?food',
          summary: 'Please fill in some other ingedients!',
          url: 'https://www.google.com',
          missedIngredients: [{ name: 'everything' }],
        };
        res.status(200).json(data);
        return;
      }
      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[randomNumber].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, ...predata[randomNumber] };
      res.status(200).json(data);
      return;
    }
  }
}
