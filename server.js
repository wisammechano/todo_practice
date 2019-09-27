var express = require('express');
var app = express();
var port = 8080;
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('.'));

app.get('/todos', function (req, res) {
  let todos = fs.readFileSync("./todos.json", 'utf-8');
  res.send(todos);
});

app.post('/todos', function(req, res) {
  fs.writeFileSync('./todos.json', JSON.stringify(req.body));
  res.send("Done!")
})


app.listen(port, function () {
  console.log('server up and running at port: %s', port);
});