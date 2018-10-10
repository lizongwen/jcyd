let indexMod = require('../model/indexMod.js');
let indexCol = {
    init: function(app) {
        app.get('/', (req, res, next) => {
            indexMod.getData(function(resp) {
                res.set({
                    'Content-type': 'text/plain',
                    'charset': 'utf-8',
                });
                res.send(resp);
            })
        })
    }
}
module.exports = indexCol;