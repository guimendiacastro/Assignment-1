/*
window.addEventListener('click', function(event){
    fetch('http://127.0.0.1:8090/list')
      .then(function(response ){
        if(response.ok){
          return response.text();
        } else {
          throw new Error("Page not found, try again later");
        }
      })
      .then(body => document.getElementById('content').innerHTML=body)
      .catch( (error) => alert("Page not found, try again later"))
  });
*/
/*
const form = document.getElementById('form1');
const tests = document.getElementById('test');

form.addEventListener('submit', function(event){
   
  fetch('http://127.0.0.1:8090/table')
    .then(function(response ){
      if(response.ok){
        
        r = response.text();
        return response.text();
      } else {
        throw new Error("Page not found, try again later");
      }
    })
    .then(body => document.getElementById('test').innerHTML=r)
    .catch( (error) => alert("Page not found, try again later"))
  
    event.preventDefault();
    
});
*/


function refreshPage(){
  window.location.reload();
} 

const qf = document.getElementById("bball_question_form_team");

qf.addEventListener('submit', async function(event){
  // stop the form from being submitted
  try {
   
  event.preventDefault();
  // extract data from form
  const data = new FormData(qf); 
  // prepare data for GET query parameters
  const params= new URLSearchParams(data);
  // concatenating params will call .toString()
  const response = await fetch('http://127.0.0.1:8090/bball/question?' + params);
  // use response.json() to parse the body into an object
  // otherwise could use JSON.parse()
  const testing = await response.json();

  //const ql = document.getElementById('timetable_content_list');
  let lis = "";
  var arr = []
  for (let bball of testing){  // assuming goats is a list
    // backtick expressions are helpful for simple templating
    //lis += `<li><b>${bball.team1}</b>: ${bball.team2}`;
    temp = [bball.team1, bball.team2, bball.date, bball.time, bball.score, bball.venue]
    arr.push(temp)
  }
  //ql.innerHTML = lis;
  console.log(arr)

  fetch = document.getElementById('fetch');

  for(var i=0; i <arr.length; i++){
      var newRow = fetch.insertRow(fetch.length);
            for(var j=0; j<arr[i].length; j++){
                var cell = newRow.insertCell(j);
                cell.innerHTML = arr[i][j];
            }
        }






}
  
  catch(error){
    alert("Server is Down Try Agian Later")
}
});

const bd = document.getElementById("bball_question_form_date");

bd.addEventListener('submit', async function(event){
  // stop the form from being submitted
  try {
   
  event.preventDefault();
  // extract data from form
  const data = new FormData(bd); 
  // prepare data for GET query parameters
  const params= new URLSearchParams(data);
  // concatenating params will call .toString()
  const response = await fetch('http://127.0.0.1:8090/bball/question_date?' + params);
  // use response.json() to parse the body into an object
  // otherwise could use JSON.parse()
  const testing_date = await response.json();

  //const ql = document.getElementById('timetable_content_list');
  let lis = "";
  var arr_date = []
  for (let bball_date of testing_date){  // assuming goats is a list
    // backtick expressions are helpful for simple templating
    //lis += `<li><b>${bball.team1}</b>: ${bball.team2}`;
    temp1 = [bball_date.team1, bball_date.team2, bball_date.date, bball_date.time, bball_date.score, bball_date.venue]
    arr_date.push(temp1)
  }
  //ql.innerHTML = lis;
  console.log(arr_date)

  fetch = document.getElementById('fetch');

  for(var i=0; i <arr_date.length; i++){
      var newRow = fetch.insertRow(fetch.length);
            for(var j=0; j<arr_date[i].length; j++){
                var cell = newRow.insertCell(j);
                cell.innerHTML = arr_date[i][j];
            }
        }



arr_date = []


}
  
  catch(error){
    alert("Server is Down Try Agian Later")
}
});


const bt = document.getElementById("bball_question_form_time");

bt.addEventListener('submit', async function(event){
  // stop the form from being submitted
  try {
   
  event.preventDefault();
  // extract data from form
  const data = new FormData(bt); 
  // prepare data for GET query parameters
  const params= new URLSearchParams(data);
  // concatenating params will call .toString()
  const response = await fetch('http://127.0.0.1:8090/bball/question_time?' + params);
  // use response.json() to parse the body into an object
  // otherwise could use JSON.parse()
  const testing_time = await response.json();

  //const ql = document.getElementById('timetable_content_list');
  let lis = "";
  var arr_time = []
  for (let bball_time of testing_time){  // assuming goats is a list
    // backtick expressions are helpful for simple templating
    //lis += `<li><b>${bball.team1}</b>: ${bball.team2}`;
    temp2 = [bball_time.team1, bball_time.team2, bball_time.date, bball_time.time, bball_time.score, bball_time.venue]
    arr_time.push(temp2)
  }
  //ql.innerHTML = lis;
  console.log(arr_time)

  fetch = document.getElementById('fetch');

  for(var i=0; i <arr_time.length; i++){
      var newRow = fetch.insertRow(fetch.length);
            for(var j=0; j<arr_time[i].length; j++){
                var cell = newRow.insertCell(j);
                cell.innerHTML = arr_time[i][j];
            }
        }



arr_time = []


}
  
  catch(error){
    alert("Server is Down Try Agian Later")
}
});