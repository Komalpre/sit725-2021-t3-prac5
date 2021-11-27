const express = require("express");
const app = express();
app.use(express.json());

const addNumber = (num1,num2) =>{
    console.log("The result is" +(num1 + num2));
    return num1 + num2;
}

app.get("/addNumbers",(req,res) =>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = addNumber(num1,num2);
    res.json({
        statuscode: 200,
        data: result
    });
});
app.post("/addNumbers",(req,res) =>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = addNumber(num1,num2);
    res.json({
        statuscode: 200,
        data: result
    });
});

const port = 3000;
app.listen(port, ()=>{
    console.log("app is listening to: "+port);
});