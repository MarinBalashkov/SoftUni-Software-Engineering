function attachEvents() {
    document.querySelector('body').addEventListener('click', async event => {
        if (event.target.id == 'btnLoad') {
            await loadContacts();
        } else if (event.target.id == 'btnCreate') {
            await createContact();
        } else if (event.target.id == 'btnDelete') {
            const contactId = event.target.parentNode.id;
            await deleteContact(contactId);
            event.target.parentNode.remove();
        }
    })
}

attachEvents();

async function loadContacts() {
    try {
        const ul = document.getElementById
        ('phonebook');
        ul.innerHTML = '';
        const contacts = await getContactList();
        Array.from(Object.entries(contacts)).forEach(([k, v]) => {
            const li = document.createElement('li');
            li.textContent = `${v.person}: ${v.phone}`;
            li.id = k;
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.id = 'btnDelete';
            li.appendChild(delBtn)
            ul.appendChild(li);
        });


    } catch (error) {
        console.log(error.message);
    }

}


async function createContact() {
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;
    if (!person || !phone) {
        return alert('Input field must not be empty');
    }

    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone })
    });

    const data = await response.json();
    console.log(data);
}

async function deleteContact(id) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete',
    });

    const data = await response.json();
    console.log(data);
}

async function getContactList() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');

    if (response.status !== 200) {
        throw new Error('dont have data !!!')
    }
    const data = await response.json();
    return data;
}
