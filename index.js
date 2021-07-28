const express= require("express");
const bodyParser= require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var weightVar= parseFloat(req.body.weight);
    var heightVar= parseFloat(req.body.height);
    var result= weightVar/(heightVar*heightVar);
    res.send("Your Body Mass Index is: "+ result);

    // res.send("wait");
});