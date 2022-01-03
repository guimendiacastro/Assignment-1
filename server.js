const express = require('express');
const app = express();

app.use(express.static('Client'));

let instruments = [ 'piano', 'concertina', 'double bas'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);