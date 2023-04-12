import express from "express";
import path from "path"
import homepageRouter from "./routes/homepageRoutes.js"

const __dirname = path.resolve();

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")))

app.use(homepageRouter);

app.listen(3000, () => {
    console.log("Server is listenning at port 3000")
})