import Recipe from '../../backend/model/Recipe.mjs';
import connectToMongodb from '../../backend/db/dbConnect.mjs';

export default async function handler(req, res) {
  await connectToMongodb();

  if (req.method === 'GET') {
    const recipes = await Recipe.find();
    return res.status(200).json(recipes);
  }

  res.status(501).json(`Not implemented`);
}
