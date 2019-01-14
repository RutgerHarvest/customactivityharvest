
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , et = require('./routes/et')
  , path = require('path')
  , favicon = require('serve-favicon');

var app = express();


  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler());


app.all('/et/save', et.save);
app.all('/et/publish', et.publish);
app.all('/et/validate', et.validate);
app.all('/et/execute', et.execute);
app.post('/', et.edit);
app.get('/config.json', et.config);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on http://localhost:" + app.get('port'));
});
