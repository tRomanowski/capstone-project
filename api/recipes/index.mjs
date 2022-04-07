import Recipe from '../../backend/model/Recipe.mjs';
import connectToMongodb from '../../backend/db/dbConnect.mjs';

export default async function handler(req, res) {
  await connectToMongodb();

  if (req.method === 'GET') {
    const recipes = await Recipe.find();
    return res.status(200).json(recipes);
  }

  if (req.method === 'POST') {
    const newRecipe = await Recipe.create(req.body);
    return res.status(200).json(newRecipe);
  }

  res.status(501).json(`Not implemented`);
}
