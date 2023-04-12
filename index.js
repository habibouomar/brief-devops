import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World Omar !")
})

app.listen(3000, () => {
    console.log("Server is listenning at port 3000")
})