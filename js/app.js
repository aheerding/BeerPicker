//get the next object from the data and call createDiv
// params - the id of the current select field and the index of the selected option
function getNext(selectId, id){
  var next;
  if(selectId === 'begin'){
    next = data[0];
  } else {
    //get the id for the next node
    let nextId;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === selectId) {
        nextId = data[i].options[id].nextNode;
        break;
      }
    }
    //get the next data item
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === nextId) {
        next = data[i];
        break;
      }
    }
  }
  //console.log(next);
  removeChildren(selectId);
  createDiv(next);
}

//creates the select based off of the passed in data
//params - the object to render from data.js
function createDiv(next) {
  let header = document.createElement('h2');
  header.setAttribute('class', next.id);
  header.appendChild(document.createTextNode(next.text));
  document.getElementById('body').appendChild(header);
  if (next.options != null) {
    let select = document.createElement('select');
    select.setAttribute('id', next.id);
    let def = document.createElement('option');
    def.appendChild(document.createTextNode('-------------'));
    def.setAttribute('value', null);
    select.appendChild(def);
    for (let i = 0; i < next.options.length; i++) {
      let option = document.createElement('option');
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
  var foundIt = false;
  //loop through backwards
  for(let i = nodes.length; i > 0; i--){
    if(i != nodes.length){
      //if the id doesn't match and we haven't reached the current node, remove
      if(nodes[i].id != selectId && foundIt == false){
        document.getElementById('body').removeChild(nodes[i]);
      } else {
        foundIt = true;
      }
    }
  }
}
