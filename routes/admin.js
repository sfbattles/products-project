const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product',(req, resp, next) => {
  resp.sendFile(path.join(rootDir,'views','add-product.html'))  //make path based on OS not the URl PATH
});

router.post('/add-product',(req, resp, next) => {
    console.log(req.body)    
    resp.redirect('/');
});


module.exports = router;

