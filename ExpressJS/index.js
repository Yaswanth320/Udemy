import express from "express";
const app = express();

const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1> helloworlwwsafsfd </h1>");
});

app.get("/greeting", (req,res) => {
    res.send("<h1> helloworlwwsafsfd </h1>");
});

app.listen(3000, () =>{
    console.log(`${port}`);
});