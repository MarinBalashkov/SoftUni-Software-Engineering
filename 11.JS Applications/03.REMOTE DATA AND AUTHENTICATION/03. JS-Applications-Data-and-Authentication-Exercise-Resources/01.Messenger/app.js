function attachEvents() {
    const main = document.getElementById('main');
    main.addEventListener('click', async event => {
        if (event.target.value == 'Refresh') {
            await getAllMessages();
        } else if (event.target.value == 'Send') {
            const author = document.querySelector('[name="author"]');
            const content = document.querySelector('[name="content"]');
            await createMessage(author.value, content.value);
            author.value = '';
            content.value = '';
        }
    })
}

attachEvents();

async function getAllMessages() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');

        if (response.status !== 200) {
            throw new Error('dont have data !!!')
        }
        const data = await response.json();
        const textarea = document.getElementById('messages');
        const messages = Array.from(Object.values(data)).map(x => `${x.author}: ${x.content}`);
        textarea.textContent = messages.join('\n');


    } catch (error) {
        console.log(error.message);
    }

}

async function createMessage(author, content){
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({author, content})
    });
}