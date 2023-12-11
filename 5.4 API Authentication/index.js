import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Yaswanth";
const yourPassword = "randomPassword";
const yourAPIKey = "e2620632-1092-419d-a093-f1b8fd657510";
const yourBearerToken = "f10b3f17-8f07-4b6a-aa82-84942abd7dc5";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
 
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const Authorization = {
  auth:{
    username: yourUsername,
    password: yourPassword
  }
};

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 try{
  const result = await axios.get(API_URL+"/all?page=2", Authorization);
  res.render("index.ejs", {
    content : JSON.stringify(result.data),
  })
 }catch(error){
  res.status(404).send(error.message);
 }
});

const params = {
  params:{
    score: 5,
    apikey: yourAPIKey,
  }
};

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const result = await axios.get(API_URL+"/filter", {
      params:{
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  }catch(error){
    res.status(402).send(error.message);
  }
});

const config = {
  headers : {
    Authorization : `Bearer ${yourBearerToken}`
  },
}
app.get("/bearerToken",async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  try{
    const result = await axios.get(API_URL+"/secrets/42", config);
    res.render("index.ejs", {
      content: JSON.stringify(result.data),
    })
  }catch(error){
    res.status(402).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
