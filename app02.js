const express = require("express");
const router = require("./routers/test_router");

const app = express();
app.set("views","./views");
app.set("view engine","ejs");

app.use("/",router);

router.get("/test1",(req,res)=>{
    res.render("test1")
});

router.get("/test2",(req,res)=>{
    res.render("test2")
});

app.listen(3000,()=>{console.log("3000 port server")});

