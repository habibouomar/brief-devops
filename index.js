import express from "express";
import path from "path"

const __dirname = path.resolve();
const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("Hello World Omar !")
})

app.listen(3000, () => {
    console.log("Server is listenning at port 3000")
})