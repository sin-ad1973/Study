module.exports = {
    devServer: {
        port: 8888,

        before: function (app, server) {
            app.get('/data/dummy.json', function (req, res) {
              const fs = require('fs')
              res.json(JSON.parse(fs.readFileSync('./data/dummy.json')))
            })
        }      
    }
}