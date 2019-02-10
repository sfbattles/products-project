const path = require('path')
const express = require ('express')

const rootDir = require('./util/path')

const bodyParser = require('body-parser')
const app = express();


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const pageNotFound = require('./routes/page-not-found')
console.log(path.join(rootDir,'public'))
app.use(bodyParser.urlencoded({ extended: true }));  //this does the buffer and added chuck together

app.use(express.static(path.join(rootDir,'public')))
//any .js file or css will go to the public folder to find the file
//you need to make sure that you do not include the public in your stylesheet
//because you are already in the public folder and need to build the rest of url from there.
//the below code will work as the same above 
//app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(pageNotFound)

app.listen(3000)
