const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 3000;

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);