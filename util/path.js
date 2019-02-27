const path = require('path')
module.exports = path.dirname(process.mainModule.filename);  //give the path of the app.js(or main process that started your app)