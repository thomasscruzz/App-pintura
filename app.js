const express = require("express");
const path = require("path")
const app = express();


app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Servidor levantandose");
});

app.get("/",(req,res)=>{
    res.send("Hola");
})
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})
app.get('/404',(req,resp)=>{
    resp.send('Error página no encontrada')
 })
 
// http://localhost:3000/
