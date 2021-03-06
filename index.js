const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jws = require('jws');
const jsonwebtoken = require('jsonwebtoken');
const routes = require('./routes/api');
const axios = require('axios');
require('dotenv').config();

const app = express();
// const router = express.Router();

const port = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {console.log(err)});

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
app.use(express.static(path.join(__dirname, "client", "public")));

app.use('/jsonwebtoken', express.static(path.join(__dirname, "node_modules", "jsonwebtoken")));
app.use('/requirejs', express.static(path.join(__dirname, "node_modules", "requirejs")));
app.use('/jws', express.static(path.join(__dirname, "node_modules", "jws")));
// ...
// Right before your app.listen(), add this:
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/dashboard.html"));
});

app.get("/editprofile", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/editprofile.html"));
});

app.get("/forgotpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/forgotpassword.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/home.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/editprofile.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/signin.html"));
});

app.get("/techniquelist", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "pages/techniquelist.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
