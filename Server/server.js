const express = require('express');
const App = express ();
const homeRoute = require("./Routes/routes.js");
const cors = require('cors');

require('dotenv');

const PORT = 3001 || process.env;

App.get ("/", (req,res)=>{

    res.send("working server get ");


})

App.use("/testApi", homeRoute);

App.listen(PORT, () =>{
    console.log("Server is up and running on Port " , PORT )

})
