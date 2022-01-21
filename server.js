const express = require('express');
const app = express();
var fs = require('fs');
var data = fs.readFileSync('games-timetable.json');
var games = JSON.parse(data)


app.use(express.urlencoded());
app.use(express.static('Client'));

var testing = require('./games-timetable.json');
let instruments = [ 'piano', 'concertina', 'double bas'];



app.get('/list', function (req, resp){
    resp.send(instruments);
});

  
  app.get('/bball/question', function (req, resp) {
    const q = req.query.bball_timetable;
    const answers = [];
    for (const bball of testing) {
      if (bball.team1.includes(q)) {
        answers.push(bball);
      }
      if(bball.team2.includes(q)){
        answers.push(bball)
      }
    }
    resp.json(answers); // resp.send would also send as JSON
  });

  app.get('/bball/question_date', function (req, resp) {
    const d = req.query.bball_timetable_date;
    const answers_date = [];
    for (const bball_date of testing) {
      if (bball_date.date.includes(d)) {
        answers_date.push(bball_date);
      }
    }
    resp.json(answers_date); // resp.send would also send as JSON
  });

  app.get('/bball/question_time', function (req, resp) {
    const t = req.query.bball_timetable_time;
    const answers_time = [];
    for (const bball_time of testing) {
      if (bball_time.time.includes(t)) {
        answers_time.push(bball_time);
      }
    }
    resp.json(answers_time); // resp.send would also send as JSON
  }); 

app.post('/timetable/new', function(req, resp){
  console.log(req.body);
  new_game = req.body;
  games.push(new_game);
  var data = JSON.stringify(games, null, 2);
  console.log(data);
  fs.writeFile('games-timetable.json', data, finished);
  function finished(err){
    console.log("All set ")
    resp.send(new_game);
    

  }
  
  
});

module.exports = app;
app.listen(8090);
