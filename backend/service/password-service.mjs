import bcrypt from 'bcrypt';

export const isPasswordMatch = (password, hash) =>
  bcrypt.compare(password, hash);
