import fetch from 'node-fetch';
const { REACT_APP_API_KEY } = process.env;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { reqArr } = req.body;
    const arr = JSON.parse(reqArr);
    const responds = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${arr[0]},+${arr[1]}&number=1`
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
