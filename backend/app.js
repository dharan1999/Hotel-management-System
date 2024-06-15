import express from "express";
import {config} from "dotenv"
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import {errorMiddleware} from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
// Dotenv is a zero-dependency module that loads environment variables 
// from a .env file into process.env. The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. It allows you to create environment variables in a . env file instead of putting them in your code.
const app = express();
config({ path:"./config/config.env" });

app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    method: ["GET","POST","PUT","DELETE"],
    credentials:true,
}));

//helps to get cookies
app.use(cookieParser());

app.use(express.json());
//the json format data is parsed as a string. This is a middleware

app.use(express.urlencoded({extended: true}));
//whatever data is obtained, handling different datatypes


//uploading files 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
dbConnection();
app.use(errorMiddleware);

//CORS is cross-origin resource sharing which allows me to grant the access the resouces for other websites 
export  default app;