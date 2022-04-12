const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

// ... other imports 
const path = require("path");

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/dashboard.html"));
});

router.get("/editprofile", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/editprofile.html"));
});

router.get("/forgotpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/forgotpassword.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/home.html"));
});

router.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/profile.html"));
});

router.get("/sigin", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/sigin.html"));
});

router.get("/techniquelist", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "client/src/pages/techniquelist.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
