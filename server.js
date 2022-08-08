const { request } = require('express');
/* express= handlers for requests with different HTTP verbs at different URL paths (routes).*/
var app = require('express')();
var http = request('http').createServer(app);

app.get('/', (req, res) => res.send('Hello Angular Serve! '));
http.listen(3000, () => {
  console.log('Listening On *:3000');
})
