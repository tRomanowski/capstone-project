import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error('JWT_SECTRET not set');
}

export const createToken = userId => jwt.sign({ sub: userId }, JWT_SECRET);

export const verifyAndDecode = token => jwt.verify(token, JWT_SECRET);
