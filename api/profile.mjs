import User from '../backend/model/User.mjs';
import connectToMongodb from '../backend/db/dbConnect.mjs';
import { verifyAndDecode } from '../backend/service/jwt-service.mjs';

export default async function profileHandler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(405).json({ code: 405, message: 'Method not allowed' });
  }

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  try {
    const token = authorizationHeader.replace('Bearer', '').trim();

    const claims = verifyAndDecode(token);

    const userId = claims.sub;

    await connectToMongodb();

    const foundUser = await User.findById(userId);

    foundUser.password = undefined;

    res.status(200).json(foundUser);
  } catch (error) {
    return res.status(403).json({ code: 403, message: 'Forbidden' });
  }
}
