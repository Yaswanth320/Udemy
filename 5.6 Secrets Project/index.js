import express from "express";
import axios from "axios";

const API_URL = "https://secrets-api.appbrewery.com";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) =>{
    try{
        const result = await axios.get(API_URL+"/random");
        const response = result.data;
        res.render("index.ejs", {
            secret : response.secret,
            user : response.user,
        });
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});


app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});