const express = require('express');
const app = express();


app.use(express.static('Client'));

var testing = require('./games-timetable.json');
let instruments = [ 'piano', 'concertina', 'double bas'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});


app.get('/table', function (req, resp) {
    const search = req.query.search;
    let results = [];
  
    for (let i = 0; i < timetables.length; i++) {
      let timetable = timetables[i];
      if (timetable.team1.includes(search)) {
        results.push(timetable.score);
      }
    }
    resp.send(results);
  });


  const goats = [
    {
      name: 'Phil',
      fact: 'Stars in Hercules'
    },
    {
      name: 'Billy',
      fact: 'Stars in Stardust'
    },
    {
      name: 'Mr Tumnus',
      fact: 'Features in The Lion, the Witch and the Wardrobe'
    },
    {
      name: 'Jocelyn Bell Burnell',
      fact: 'Discovered pulsars'
    }
  ];
  



  app.get('/bball/question', function (req, resp) {
    const q = req.query.bball_timetable;
    const answers = [];
    for (const bball of testing) {
      if (bball.team1.includes(q)) {
        answers.push(bball);
      }
    }
    resp.json(answers); // resp.send would also send as JSON
  });

app.listen(8090);
