import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// import usersRouter from "routes/users";

let app = express();
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

import geminiOldRouter from "./routes/generateRoute";
import geminiNewRouter from "./routes/geminiRoute";
app.use("/old", geminiOldRouter); 
app.use("/new", geminiNewRouter); 
// app.use("/users", usersRouter);
console.log(`server is running`);

export default app;
