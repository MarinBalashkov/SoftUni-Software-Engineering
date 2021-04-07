function solution() {
    const inputElement = document.querySelector('input');
    const addButtonelement = document.querySelector('section>div>button');
    const listofGiftsElement = document.querySelectorAll('.card')[1].children[1];
    const sendGiftsElement = document.querySelectorAll('.card')[2].children[1];
    const discadGiftsElement = document.querySelectorAll('.card')[3].children[1];



    //console.log(listofGiftsElement);
    addButtonelement.addEventListener('click', (ev) => {
        const liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = inputElement.value;

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.classList.add('sendButton');
        sendButton.addEventListener('click', (ev) => {
            const parentLi = ev.target.parentNode;
           // const li = document.createElement('li');
            Array.from(parentLi.children).forEach(x => x.remove());
           /// li.textContent = parentLi.textContent;
            sendGiftsElement.appendChild(parentLi);
            //parentLi.remove();
        })

        const discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.classList.add('discardButton');
        discardButton.addEventListener('click', (ev) => {
            const parentLi = ev.target.parentNode;
           // const li = document.createElement('li');
            Array.from(parentLi.children).forEach(x => x.remove());
           /// li.textContent = parentLi.textContent;
           discadGiftsElement.appendChild(parentLi);
            //parentLi.remove();
        })

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);



        listofGiftsElement.appendChild(liElement);
        const arrOfLi = Array.from(listofGiftsElement.children);
        arrOfLi.sort((a, b) => a.textContent.localeCompare(b.textContent));
        arrOfLi.forEach(li => listofGiftsElement.appendChild(li));
        inputElement.value = '';

    })
}