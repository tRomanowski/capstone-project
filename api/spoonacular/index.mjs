import fetch from 'node-fetch';
const { REACT_APP_API_KEY } = process.env;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } =
      req.body;
    if (
      ingredient1 &&
      ingredient2 &&
      ingredient3 &&
      ingredient4 &&
      ingredient5
    ) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3},+${ingredient4},+${ingredient5}&number=1`
      );
      const predata = await responds.json();
      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[0].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, predata };
      res.json(data);
      return;
    }

    if (ingredient1 && ingredient2 && ingredient3 && ingredient4) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3},+${ingredient4}&number=1`
      );
      const predata = await responds.json();
      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[0].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, predata };
      res.json(data);
      return;
    }

    if (ingredient1 && ingredient2 && ingredient3) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2},+${ingredient3}&number=1`
      );
      const predata = await responds.json();
      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[0].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, predata };
      res.json(data);
      return;
    }

    if (ingredient1 && ingredient2) {
      const responds = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${ingredient1},+${ingredient2}&number=1`
      );
      const predata = await responds.json();
      const response2 = await fetch(
        `https://api.spoonacular.com/recipes/${predata[0].id}/information?apiKey=${REACT_APP_API_KEY}`
      );
      let data = await response2.json();
      data = { ...data, predata };
      res.json(data);
      return;
    }
  }
}
