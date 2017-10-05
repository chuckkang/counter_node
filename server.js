var express = require("express");
var ejd = require("ejs");
var bodyparser = require("body-parser");
var path = require("path");
var session = require("express-session");

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setup views folder
app.use(session({ secret: 'codingdojorocks' }))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); // this sets up the correct engine to use to render the templates


app.get('/', function (req, res) {
	data = {count: 1}
	res.render("index", data);
})
app.post('/', function (req, res) {
	req.session.count = Number(req.body.counter) + 1
	console.log("req.body.counter", req.session.count)
	data = { count: req.session.count }
	res.render("index", data);
})

app.listen(6789, function () {
	console.log("listening on port 6789");
});