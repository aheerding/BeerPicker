"use strict";
//see if cookies exist and load in past favorites
/*var cookiesExist = false;
if(document.cookie != ""){
  console.log('cookies exist');
  cookiesExist = true;
} else {
  console.log('no cookies exist');
}*/

//see if local storage exists
if (!ie7) {
  if (localStorage.getItem('beers') === null) {
    var beers = [];
    localStorage.setItem('beers', JSON.stringify(beers));
  }
  //show favorites
  showFavorites(JSON.parse(localStorage.getItem("beers")), localStorage.getItem("name"));
}

function showFavorites(faves, name) {
  var favorites = document.getElementById('faves');
  if (favorites.hasChildNodes()) {
    while (document.getElementById('faves').hasChildNodes()) {
      document.getElementById('faves').removeChild(document.getElementById('faves').lastChild);
    }
  }
  var head = document.createElement('h3');
  head.setAttribute('id', 'faveHead');
  if (name != null) {
    head.appendChild(document.createTextNode(name));
  }
  var list = document.createElement('ul');
  list.setAttribute('id', 'faveList');
  for (var i = 0; i < faves.length; i++) {
    var item = document.createElement('li');

    item.appendChild(document.createTextNode(faves[i]));
    list.appendChild(item);
  }
  document.getElementById('faves').appendChild(head);
  document.getElementById('faves').appendChild(list);
}

function getCookies() {
  var decodeCook = decodeURIComponent(document.cookie);
  var cooks = decodeCook.split(';');
  return cooks;
}
//get the next object from the data and call createDiv
// params - the id of the current select field and the index of the selected option
function getNext(selectId, id) {
  var next;
  if (selectId === 'begin') {
    next = data[0];
  } else if (id != 'blank') {
    //get the id for the next node
    var nextId;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === selectId) {
        nextId = data[i].options[id].nextNode;
        break;
      }
    }
    //get the next data item
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === nextId) {
        next = data[i];
        break;
      }
    }
  }
  removeChildren(selectId);
  if (next != undefined) {
    createDiv(next);
  }
}

//creates the select based off of the passed in data
//params - the object to render from data.js
function createDiv(next) {
  var header = document.createElement('h3');
  header.setAttribute('class', next.id);
  header.appendChild(document.createTextNode(next.text));
  document.getElementById('body').appendChild(header);
  callFade(header);
  if (next.options != null) {
    var select = document.createElement('select');
    select.setAttribute('id', next.id);
    var def = document.createElement('option');
    def.appendChild(document.createTextNode('-------------'));
    def.setAttribute('value', 'blank');
    select.appendChild(def);
    for (var i = 0; i < next.options.length; i++) {
      var option = document.createElement('option');
      option.appendChild(document.createTextNode(next.options[i].text));
      option.setAttribute('value', i);
      select.appendChild(option)
    }
    if (ie7) {
      select.setAttribute('onchange', getNext(this.id, this.value));
    } else {
      select.setAttribute('onchange', 'getNext(this.id, this.value)');
    }
    document.getElementById('body').appendChild(select);
    callFade(select);
  } else {
    addRec(next.id);
  }
}

function saveRecommend() {
  if (localStorage.getItem('name') === null && document.getElementById('name').value ==='') {
    alert("Please enter your name.");
    console.log(document.getElementById('name').value);
  } else {
    var id = document.getElementById('body').lastChild.id;
    var beerName;
    for (var i = 0; i < recommendations.length; i++) {
      if (id == recommendations[i].id) {
        beerName = recommendations[i].brewery + " " + recommendations[i].text;
      }
    }
    if (ie7) {
      // use cookies
    } else {
      //use localStorage
      //console.log(beerName);
      var list = JSON.parse(localStorage.getItem("beers"));
      //make sure that the beer doesn't already exist in the list
      var exists = false;
      for (var i = 0; i < list.length; i++) {
        if (list[i] == beerName) {
          exists = true;
        }
      }
      if (!exists) {
        list.push(beerName);
        localStorage.setItem('beers', JSON.stringify(list));
      }
      //console.log(document.getElementById('name').value);
      if(document.getElementById('name').value != ''){
        localStorage.setItem('name', document.getElementById('name').value);
      }
      var name = localStorage.getItem('name');
      console.log('name');
      showFavorites(list, name);
      //console.log(list);
    }
  }

  /*if(cookiesExist){
    //if cookies already exist, just add the current item
    var cookies = getCookies();
    console.log(cookies);
  } else {
    //otherwise save the username and then the cookies
    //check if the name has been filled out
    var name = document.getElementById('name').value;
    var cook = "username=" + name;
    console.log(cook);
    document.cookie = cook;
    cookiesExist = true;
  }*/
}

function addRec(id) {
  var recommend;
  for (var i = 0; i < recommendations.length; i++) {
    if (id == recommendations[i].id) {
      recommend = recommendations[i];
      break;
    }
  }
  var rec = document.createElement('div');
  var par = document.createElement('p');
  rec.setAttribute('id', recommend.id);
  var text = "You might like " + recommend.text + " brewed by " + recommend.brewery;
  var saveButt = document.createElement('input');
  saveButt.setAttribute('id', 'saveRec');
  saveButt.setAttribute('type', 'button');
  if (ie7) {
    saveButt.setAttribute('onclick', saveRecommend());

  } else {
    saveButt.setAttribute('onclick', 'saveRecommend()');
  }
  saveButt.setAttribute('value', 'Save for Later');
  par.appendChild(document.createTextNode(text));
  rec.appendChild(par);
  document.getElementById('form').appendChild(saveButt);
  document.getElementById('body').appendChild(rec);
  callFade(rec);
}

function removeChildren(selectId) {
  //remove save button if it exists
  if (document.getElementById('saveRec') != null) {
    document.getElementById('form').removeChild(document.getElementById('saveRec'));
  }
  //get array of all nodes in body
  var nodes = document.getElementById('body').childNodes;
  //loop through backwards
  for (var i = nodes.length; i > 0; i--) {
    if (i != nodes.length) {
      //if the id doesn't match and we haven't reached the current node, remove
      if (nodes[i].id != selectId) {
        document.getElementById('body').removeChild(nodes[i]);
      } else {
        break;
      }
    }
  }
}

//slide in the next item
function callFade(item) {
  item.style.opacity = 0;
  item.style.display = 'block';
  fade(item);
}

function fade(item) {
  var opacity = parseFloat(item.style.opacity);
  //console.log(opacity);
  if (opacity < 1) {
    opacity += .02;
    item.style.opacity = opacity;
    requestAnimationFrame(function() {
      fade(item);
    });
  }
}
