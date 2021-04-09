const express = require('express');
const App = express ();

const cors = require('cors');

require('dotenv');

const PORT = 3001 || process.env;

App.listen(PORT, () =>{
    console.log("Server is up and running on Port " , PORT )

})
