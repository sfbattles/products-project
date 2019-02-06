const path = require('path')
const express = require('express')

const router = express.Router();

router.use('/',(req, resp, next) => {
  resp.status(404).sendFile(path.join(__dirname,'..','views','page-not-found.html'))  //make path based on OS not the URl PATH  
});

module.exports = router;