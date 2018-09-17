const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/dev");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

require("./services/regularAuth");
require("./services/googleAuth");

mongoose.connect(keys.MONGO_KEY);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize())

require("./routes/authRoutes")(app);
require("./routes/routeRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Listening on: " + PORT));