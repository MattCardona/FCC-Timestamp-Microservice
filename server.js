const express = require("express");
const moment = require("moment");
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/api/:time', (req, res) => {
  var time = req.params.time;
  var natural = moment(time, ['MM-DD-YYYY', 'MMMM-DD-YYYY']).format("MMMM  DD YYYY");
  var unix = moment(time, 'MMMM-DD-YYYY').format("X");
  if(moment(time, ['MM-DD-YYYY', 'MMMM-DD-YYYY']).isValid()){
    res.json({unix: parseInt(unix), natural: natural});
    res.end();
  }
  res.json({unix: parseInt(unix), natural: parseInt(unix)});
});

app.listen(port, ()=>{
  console.log(`Listening to Port ${port}`);
})