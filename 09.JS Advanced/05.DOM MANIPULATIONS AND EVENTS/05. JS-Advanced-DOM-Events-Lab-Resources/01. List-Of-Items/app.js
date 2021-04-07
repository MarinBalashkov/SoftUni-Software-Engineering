function addItem() {
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newitemText').value;
    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}