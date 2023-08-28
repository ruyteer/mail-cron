import express from "express";
import cors from "cors";
import { router } from "./routes/router";
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

export { app };
