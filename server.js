var express = require('express');
var path = require('path');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var cors = require('cors')
require('dotenv').config()

var router = require('./src/nodeServer/router')
var schema = require('./src/nodeServer/schema')
var root = require('./src/nodeServer/root')

var app = express();
console.log("HEHE", process.env.enviornment)
const PORT = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(cors())
app.use(router)

app.use(express.static(path.join(__dirname, 'build')));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, 
}));

app.get('/', function (req, res) {
  res.send('app is healthy')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);