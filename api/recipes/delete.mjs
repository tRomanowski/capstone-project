import User from '../../backend/model/User.mjs';
import connectToMongodb from '../../backend/db/dbConnect.mjs';
import { verifyAndDecode } from '../../backend/service/jwt-service.mjs';

export default async function handler(req, res) {
  await connectToMongodb();

  if (req.method === 'PATCH') {
    const title = req.body;

    const authorizationHeader = req.headers.authorization;

    try {
      const token = authorizationHeader.replace('Bearer', '').trim();

      const claims = verifyAndDecode(token);

      const userID = claims.sub;

      const result = await User.findByIdAndUpdate(
        { _id: userID },
        { $pull: { recipes: title } }
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(403).json({ code: 403, message: 'Forbidden' });
    }
  }

  res.status(501).json(`Not implemented`);
}
