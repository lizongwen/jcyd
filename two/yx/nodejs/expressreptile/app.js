let express = require('express');
let app = express();
let indexCol = require('./controller/indexController.js');
indexCol.init(app);

app.listen('8080');