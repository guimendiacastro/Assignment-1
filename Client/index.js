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

const qf = document.getElementById("bball_question_form");

qf.addEventListener('submit', async function(event){
  // stop the form from being submitted
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

  const ql = document.getElementById('timetable_content_list');
  let lis = "";
  for (let bball of testing){  // assuming goats is a list
    // backtick expressions are helpful for simple templating
    lis += `<li><b>${bball.team1}</b>: ${bball.team2}`; 
  }
  ql.innerHTML = lis;
});
