const path = require('path')
const express = require('express')
const router = express.Router();

router.use('/',(req, resp, next) => {
 resp.status(404).render('page-not-found',{pageTitle: 'Page Not Found'});
});                           

module.exports = router;