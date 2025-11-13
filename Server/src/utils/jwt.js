import jwt from "jsonwebtoken";

const { JWT_SECRET, JWT_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN, NODE_ENV } =
  process.env;

export function signAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
