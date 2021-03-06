import User from '../../backend/model/User.mjs';
import connectToMongodb from '../../backend/db/dbConnect.mjs';
import { verifyAndDecode } from '../../backend/service/jwt-service.mjs';

export default async function handler(req, res) {
  await connectToMongodb();

  if (req.method === 'GET') {
    const authorizationHeader = req.headers.authorization;

    try {
      const token = authorizationHeader.replace('Bearer', '').trim();
      const claims = verifyAndDecode(token);

      const userId = claims.sub;

      const foundUser = await User.findById(userId);

      const userRecipes = foundUser.recipes;
      return res.status(200).json(userRecipes);
    } catch (error) {
      return res.status(403).json({ code: 403, message: 'Forbidden' });
    }
  }

  if (req.method === 'PATCH') {
    const authorizationHeader = req.headers.authorization;

    const recipe = req.body;

    try {
      const token = authorizationHeader.replace('Bearer', '').trim();

      const claims = verifyAndDecode(token);

      const userID = claims.sub;

      const result = await User.findByIdAndUpdate(
        { _id: userID },
        { $push: { recipes: recipe } }
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(403).json({ code: 403, message: 'Forbidden' });
    }
  }

  res.status(501).json(`Not implemented`);
}
