// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/index', function (req, res) {
    res.render('pages/index');
});
app.get('/about', function (req, res) {
    res.render('pages/about');
});
app.get('/contact', function (req, res) {
    res.render('pages/about');
});
app.get('/404', function (req, res) {
    res.render('pages/404');
});
app.get('/companyPage', function (req, res) {
    res.render('pages/companyPage');
});
app.get('/info', function (req, res) {
    res.render('pages/info');
});
app.get('/login', function (req, res) {
    res.render('pages/login');
});
app.get('/userPage', function (req, res) {
    res.render('pages/userPage');
});
