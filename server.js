const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hey');
});

app.listen(3000, function() {
    console.log('yooo');
});
