﻿const uri = 'test/api/review';
let todos = [];

function verify() {
	
	document.getElementById("message").style.display = "none";
  const pawInput = document.getElementById("psw");
  const nameInput = document.getElementById("usrname");
  


  const item = {
    userID: 1,
    userName: nameInput.value.trim(),
	password: pawInput.value.trim()
  };  

  fetch('test/api/LogIn', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(function(response){return response.json()})
    .then(function(text) {
		//console.log(text);
      if (text.userName){
		  localStorage.setItem("userName", text.userName);
         window.open("/ReviewDetails.htm","_self");
	  }
	  else if (text.status === 404)
		  //stay in the log in page, show error.
	      document.getElementById("message").style.display = "block";
    })
    .catch(function(error) {alert('Unable to login.')}); 
	
}
