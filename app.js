const express = require("express");
const app = express();



app.listen(3000, () => {
    console.log("Servidor levantandose");
});

app.get("/",(req,res)=>{
    res.send("Hola");
})
// http://localhost:3000/
