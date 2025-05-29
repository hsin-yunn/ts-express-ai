import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

let app = express();
import cors from "cors";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

import geminiOldRouter from "./routes/geminiOldRoute";
import geminiNewRouter from "./routes/geminiRoute";
app.use("/old", geminiOldRouter);
app.use("/new", geminiNewRouter);
console.log("server is running");

export default app;
