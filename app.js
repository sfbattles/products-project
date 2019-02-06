const express = require ('express')

const bodyParser = require('body-parser')
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const pageNotFound = require('./routes/page-not-found')

app.use(bodyParser.urlencoded({ extended: true }));  //this does the buffer and added chuck together

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(pageNotFound)

app.listen(3000)
