const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const session    = require('express-session');
const flash      = require('express-flash');
// const bcrypt     = require('bcrypt');
const path       = require('path');
const PORT = 8000;

const app = express();
// serves up our Angular App
// app.use(express.static(__dirname + '/client/dist/'));
// app.use(express.static(path.join(__dirname, '/client/public/dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(flash());


// app.use(express.static( __dirname + './public/dist/public' ));

app.use(express.static(path.join(__dirname, '/public/dist/public')));



// app.use(express.static(__dirname + './static'));
// app.use(session({
//   secret: 'codingmojo',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));
//
// // app.set('views'), path.join(__dirname, '/client/views');
// // app.set(__dirname + '/client/views');
// app.set(__dirname + '/views');
//
//
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(PORT, ()=> {
  console.log("Listening on PORT:"+PORT);
});
