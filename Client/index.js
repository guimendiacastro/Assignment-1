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


