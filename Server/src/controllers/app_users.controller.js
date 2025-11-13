import * as svc from "../services/app_users.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  signAccessToken,
  verifyToken,
} from "../utils/jwt.js";

export const getById = asyncHandler(async (req, res) => {
  const user = await svc.getById(req.params.id);
  if (!user) return res.status(404).json({ error: "Not Found" });
  res.json(user);
});

export const authenticate = asyncHandler(async (req, res) => {
  const authUser = await svc.authUser(req.body);
  if (!authUser)
    return res.status(401).json({ error: "User could not be verified" });

  const accessToken = signAccessToken({ sub: authUser.id });

  res.json({
    access_token: accessToken,
    user: authUser,
  });
});

export const me = asyncHandler(async (req, res) => {
  const auth = req.headers.authorization;
  const [, token] = auth.split(" ");

  if (!token) {
    return res.status(401).json({ error: "Missing access token" });
  }

  try {
    const payload = verifyToken(token);
    const user = await svc.getById(payload.sub);
    if (!user) return res.status(401).json({ error: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error("Me error:", err);
    return res.status(401).json({ error: "Invalid access token" });
  }
});

export const create = asyncHandler(async (req, res) => {
  const created = await svc.createUser(req.validated);
  res.status(201).json(created);
});

export const update = asyncHandler(async (req, res) => {
  const updated = await svc.update(req.params.id, req.validated);
  if (!updated) return res.status(404).json({ error: "Not Found" });
  res.json(updated);
});
