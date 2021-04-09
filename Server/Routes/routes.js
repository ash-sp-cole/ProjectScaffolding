const express = require('express');
const router = express.Router();

router.get("/testApi", (req,res) =>{
res.send("working server get ");


})

module.exports = router;