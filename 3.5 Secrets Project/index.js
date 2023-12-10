//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

app.use(express.urlencoded({extended : true}));
app.use(morgan("dev"));

function authenticatePass(req, res, next){
    console.log(req.body);
    password = req.body["password"];
    next();
}
app.use(authenticatePass);

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req, res) => {
    if(password === "correctPass"){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});