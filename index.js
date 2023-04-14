import express, { json } from "express";
import bodyParser from "body-parser"
import path from "path"
import dotenv from "dotenv";
import homepageRouter from "./routes/homepageRoutes.js"
import connectDB from "./config/connectDB.js";
import categoryRouter from "./routes/categoryRoutes.js"

dotenv.config()

connectDB();

const __dirname = path.resolve();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")))

app.use(homepageRouter);
app.use(categoryRouter);

app.listen(3000, () => {
    console.log("Server is listenning at port 3000")
})