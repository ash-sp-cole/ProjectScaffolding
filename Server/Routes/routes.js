const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        console.log("route for home sucess")

    }
    catch (err) {
        console.log("error with route")
    }


})

module.exports = router;