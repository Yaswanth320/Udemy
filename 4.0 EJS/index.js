import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const day = new Date("2023-12-04").getDay();
    if(day === 0 || day === 6){
        console.log("weekend");
        res.render("index.ejs", 
            {today: "It's a Weekend It's time to have fun!"}
        );
    }else{
        console.log("weekday");
        res.render("index.ejs", 
            {today: "It's a weekday It's time to work!"}
        );
    }
});

app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
});

