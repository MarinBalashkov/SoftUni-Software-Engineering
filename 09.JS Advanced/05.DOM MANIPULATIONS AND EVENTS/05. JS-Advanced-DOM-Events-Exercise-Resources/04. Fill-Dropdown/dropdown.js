function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    document.getElementById('menu').appendChild(optionElement);

    newItemValue.value = '';
    newItemText.value = '';
}