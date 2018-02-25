"use strict";
//get the next object from the data and call createDiv
// params - the id of the current select field and the index of the selected option
function getNext(selectId, id){
  var next;
  if(selectId === 'begin'){
    next = data[0];
  } else if(id != 'blank'){
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
  //console.log(selectId);
  removeChildren(selectId);
  //console.log(next);
  if(next != undefined){
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
    select.setAttribute('onchange', 'getNext(this.id, this.value)');
    document.getElementById('body').appendChild(select);
  }
}

function removeChildren(selectId){
  //get array of all nodes in body
  var nodes = document.getElementById('body').childNodes;
  //loop through backwards
  for(var i = nodes.length; i > 0; i--){
    if(i != nodes.length){
      //if the id doesn't match and we haven't reached the current node, remove
      if(nodes[i].id != selectId){
        document.getElementById('body').removeChild(nodes[i]);
      } else {
        break;
      }
    }
  }
}
