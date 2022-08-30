let inputText = document.getElementById('inputText');
let addList =document.getElementById('addList');
let listContainer = document.getElementById('listContainer');

addList.addEventListener('click',()=>{
    let listcard = document.createElement('p');
    listcard =document.createTextNode( inputText.value);
    listContainer.appendChild(listcard);
})