const uri = 'test/api/review';
let todos = [];

function getItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function displayRatings() {
  uri1 = 'test/api/review/ReviewType';
  
  fetch(uri1)
    .then(response =>  response.json())			    
    .then(data => {
		document.getElementById("ratingList").style.display = "block";	
	 displayRatingList(data);})
    .catch(error =>  console.error('Unable to get items.', error));
  
}

function displayRatingList(data){
  const tBody = document.getElementById('ratingList');
  tBody.innerHTML = '';
  data.forEach(item => {
       
  tBody.innerHTML = tBody.innerHTML  + item + "<br/>";    
        
  });	
	
}

function addItem() {
  const addNameTextbox = document.getElementById('add-name');

  const item = {
    isComplete: false,
    name: addNameTextbox.value.trim()
  };

  fetch(uri, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      getItems();
      addNameTextbox.value = '';
    })
    .catch(error =>  console.error('Unable to add item.', error));
}

/*
function deleteItem(id) {
  fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
  .then(() => getItems())
  .catch(error => console.error('Unable to delete item.', error));
}
*/

function displayViewForm(id) {
	alert("here");
  document.getElementById('singleview').style.display = 'block';
  const item = todos.find(item =>  item.id === id);
  //console.log(item);
  document.getElementById('selected-review').value = item.reviewText;
  document.getElementById('selected-rating').value = item.ratingType;
  
  //document.getElementById('editForm').style.display = 'block';
}
/*

function updateItem() {
  const itemId = document.getElementById('edit-id').value;
  const item = {
    id: parseInt(itemId, 10),
    isComplete: document.getElementById('edit-isComplete').checked,
    name: document.getElementById('edit-name').value.trim()
  };

  fetch(`${uri}/${itemId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  .then(() => getItems())
  .catch(error => console.error('Unable to delete item.', error));

  closeInput();

  return false;
}
*/
function closeInput() {
  document.getElementById('singleview').style.display = 'none';
}

function _displayCount(itemCount) {
  const name = (itemCount === 1) ? 'review' : 'reviews';

  document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
  const tBody = document.getElementById('todos');
  tBody.innerHTML = '<tr><th>Name</th><th></th></tr>';
  _displayCount(data.length);

  const button = document.createElement('button');

  data.forEach(item =>  {
    

    let viewButton = button.cloneNode(false);
    viewButton.innerText = 'View';
    viewButton.setAttribute('onclick', `displayViewForm(${item.id})`);

    let tr = tBody.insertRow();
    
    

    let td2 = tr.insertCell(0);
    let textNode = document.createTextNode(item.name);
    td2.appendChild(textNode);

    let td3 = tr.insertCell(1);
    td3.appendChild(viewButton);    
  
  });

  todos = data;
}