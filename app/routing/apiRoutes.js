var path = require('path');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
      res.send('api friends get method')
    });
    app.post('/api/friends', function(req, res){
        res.send('api friends post method')
    })
}