const path = require('path')  //help with location of html files
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router();

router.get('/',(req, resp, next) => {
    resp.sendFile(path.join(rootDir,'views','shop.html'));  //build path automatic do not put / in mac/linux/windows
 });

 module.exports = router