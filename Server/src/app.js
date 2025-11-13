import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import v1 from "./api/v1/routes/index.js";
import { notFound, errorHandler } from "./utils/error.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", v1);

//app.get("/", (req, res) => res.json({ message: "Server is running" }));

app.get("/health", (req, res) => res.json({ ok: true }));

app.use(notFound);
app.use(errorHandler);

export default app;
