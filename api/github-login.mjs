import {
  getGitHubAccessToken,
  getGitHubName,
} from '../backend/service/git-hub-service.mjs';

import User from '../backend/model/User.mjs';
import connectToMongodb from '../backend/db/dbConnect.mjs';
import { createToken } from '../backend/service/jwt-service.mjs';

export default async function githubLoginhandler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ code: 405, message: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(401).json({ code: 401, message: 'Unauthorized' });
  }

  const githubAccessToken = await getGitHubAccessToken(code);

  if (!githubAccessToken) {
    return res.status(403).json({ code: 403, message: 'Forbidden' });
  }

  const githubName = await getGitHubName(githubAccessToken);

  await connectToMongodb();

  const foundUser = await User.findOne({ githubName });

  if (foundUser) {
    const token = createToken(foundUser._id);
    return res.status(200).json({ token });
  } else {
    const newUser = new User({ githubName });
    await newUser.save();
    const token = createToken(newUser._id);
    return res.status(200).json({ token });
  }
}
