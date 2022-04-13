import User from '../backend/model/User.mjs';
import connectToMongodb from '../backend/db/dbConnect.mjs';
import { createToken } from '../backend/service/jwt-service.mjs';
import { isPasswordMatch } from '../backend/service/password-service.mjs';

export default async function loginHandler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ code: 405, message: 'Method not allowed' });
  }

  const { name, password } = req.body;

  if (!(name && password)) {
    return res
      .status(404)
      .json({ code: 404, message: 'Name and password reqiured' });
  }

  await connectToMongodb();

  const foundUser = await User.findOne({ name });

  if (!foundUser) {
    return res.status(401).json({ code: 401, message: 'Unauthorized' });
  }
  const isMatch = await isPasswordMatch(password, foundUser.password);

  if (!isMatch) {
    return res.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  const token = createToken(foundUser._id);

  res.status(200).json({ token });
}
