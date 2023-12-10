import express from "express";
import methodoverride from "method-override";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(methodoverride('_method'));

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date().toLocaleDateString("en-US", options);

let idValue = 0;
let posts = [];

function getIndex(idValue){
    const value = posts.findIndex(object => {
        return object.id == idValue;
    });
    return value;
}

app.get("/", (req, res)=>{
    res.render("index.ejs", {blogposts : posts});
});

app.get("/article", (req, res) => {
    res.render("article.ejs",
    {
        articlename: "",
        description: ""
    }
    );
}); 

app.get("/edit/:id", (req, res)=>{
    idValue = req.params.id;
    const indexOfObject = getIndex(idValue);
     res.render("edit.ejs", 
    {  
        id: idValue,
        articlename : posts[indexOfObject]["articlename"],
        description : posts[indexOfObject]["description"],
    }
    );
});

app.post("/article/submit", (req, res) => {
    idValue = posts.length;
    posts.push({
        id: idValue + 1,
        articlename : req.body.title,
        date: today,
        description: req.body.description, 
    });
    res.redirect("/");
}); 

app.delete("/delete/:id", (req, res)=>{
    idValue = req.params.id;
    const indexOfObject = getIndex(idValue);
    posts.splice(indexOfObject, 1);
    res.redirect("/");
});

app.put("/update/:id", (req, res) => {
    idValue = req.params.id;
    const indexOfObject =getIndex(idValue);

    posts[indexOfObject]["articlename"] = req.body.title;
    posts[indexOfObject]["description"] = req.body.description;

    res.redirect("/");
});

app.listen(port, () =>{});