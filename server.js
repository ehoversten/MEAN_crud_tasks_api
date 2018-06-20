const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const session    = require('express-session');
const flash      = require('express-flash');
const path       = require('path');
const PORT = 8000;

const app = express();

// allow our APP to use bodyParser and parse return OBJECTS as JSON OBJECTS
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(flash());

// serves up our Angular App
app.use(express.static(path.join(__dirname, '/public/dist/public')));

// connect to our Mongo database
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(PORT, ()=> {
  console.log("Listening on PORT:" + PORT);
});
