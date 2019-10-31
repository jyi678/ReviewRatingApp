const uri = 'test/api/review';
let todos = [];
let usrname = '';

function getItems() {
	
  if (localStorage.getItem("userName") == '' || localStorage.getItem("userName")== null)
  {
	  
	  document.getElementById("alertDIV").style.display = "block";	
	  window.location.href = "index.html";
	  
  }
  fetch(uri)
    .then(function(response){return response.json()})
    .then(function(data) {   _displayItems(data)})
    .catch(function(error) { console.error('Unable to get items.', error)});
}

function displayRatings() {
  uri1 = 'test/api/review/ReviewType';
  
  fetch(uri1)
    .then(function(response){return response.json()})			    
    .then(function(data) {
		document.getElementById("ratingList").style.display = "block";	
	 displayRatingList(data);})
    .catch(function(error) { console.error('Unable to get items.', error)});
  
}

function displayRatingList(data){
  const excellentDIV = document.getElementById('excellentSum');
  const moderateDIV = document.getElementById('moderateSum');
  const improveDIV = document.getElementById('improveSum');
  
  var excellentCount = 0, moderateCount = 0, improveCount = 0;
  
  data.forEach(function(item) {
	  if (item === "Excellent")
		  excellentCount++;
	  if (item === "Moderate")
		  moderateCount++;
	  if (item === "Needs Improvement")
		  improveCount++;                 
  });	
  
  excellentDIV.innerHTML =  excellentCount; 
  moderateDIV.innerHTML =  moderateCount;
  improveDIV.innerHTML = improveCount;
	
}

function addItem() {
  const ratingtypebox = document.getElementById('ratingtype');
  const commentsbox = document.getElementById('comments');

  const item = {
	  id: todos.length + 1 ,
    reviewText: commentsbox.value.trim(),
    ratingType: ratingtypebox.value.trim(),
	name: localStorage.getItem("userName")
  };

  fetch(uri, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(function(response){return response.json()})
    .then(function() {
      document.getElementById('addedInfo').style.display = "block";	  	  
	  todos.push(JSON.stringify(item));	 	 
	 
	  getItems();
	  displayRatings();
    })
    .catch(function(error) { 
	document.getElementById('addedInfoWrong').style.display = "block";	
	console.error('Unable to add item.', error)});
}

function displayViewForm(id) {	
  document.getElementById('singleview').style.display = 'block';
  const item = todos.find(function(item) { return item.id === id});
  //console.log(item);
  document.getElementById('selected-review').innerHTML = item.reviewText;
  document.getElementById('selected-rating').innerHTML = item.ratingType;

}

function closeInput() {
  document.getElementById('singleview').style.display = 'none';
}


function _displayCount(itemCount) {
  const name = (itemCount === 1) ? 'review' : 'reviews';

  document.getElementById('counter').innerText = itemCount + " " + name;
}

function _displayItems(data) {
  const tBody = document.getElementById('todos');
  tBody.innerHTML = '<tr><th>Name</th><th></th></tr>';
  _displayCount(data.length);

  const button = document.createElement('button');

  data.forEach(function(item)   {
    

    let viewButton = button.cloneNode(false);
    viewButton.innerText = 'View';
    viewButton.setAttribute('onclick', 'displayViewForm('+item.id +')');

    let tr = tBody.insertRow();
    
    

    let td2 = tr.insertCell(0);
    let textNode = document.createTextNode(item.name);
    td2.appendChild(textNode);

    let td3 = tr.insertCell(1);
    td3.appendChild(viewButton);    
  
  });

  todos = data;
}