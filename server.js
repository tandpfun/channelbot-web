var express = require('express');
var app = express();
app.set("port", process.env.PORT);
var http = require("http");
var http = require('http'); //importing http
var ejs = require('ejs');
app.use(express.static('public'))
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html')
})
app.get("/documentation", (request, response) => {
  response.sendFile(__dirname + '/start.html')
})
app.get("/info", (request, response) => {
  response.sendFile(__dirname + '/components.html')
})
app.get("/data", (request, response) => {
  response.sendFile(__dirname + '/charts.html')
})
app.get("/faq", (request, response) => {
  response.sendFile(__dirname + '/faqs.html')
})
app.get("/showcase", (request, response) => {
  response.sendFile(__dirname + '/showcase.html')
})
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
