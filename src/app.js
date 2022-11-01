
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var mongoose = require('./conexDB/conn')

 
//seteamos el motor de plantillas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('trust proxy', 1) // Proxy de confianza

//para procesar datos enviados desde forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuraciones de cabecera y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, XRequested-With, content-type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Request-Method', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Allow','GET,POST,PUT,DELETE,OPTIONS');
  next();
});

//seteamos la carpeta public para archivos estáticos
app.use(express.static(path.join(__dirname, './public')));

//para poder trabajar con las cookies
 app.use(cookieParser());

// No almacenar caché
// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });

//llamar al router
app.use('/', require('./router/router'));

// Configuraciones
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log("***********************************************************")
  console.log('===> 🚀 SERVIDOR CORRIENDO en http://localhost:' + app.get('port')) 
  
});

module.exports = app;