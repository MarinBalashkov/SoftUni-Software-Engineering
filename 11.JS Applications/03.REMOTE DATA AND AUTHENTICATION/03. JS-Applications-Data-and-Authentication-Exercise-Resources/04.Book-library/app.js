async function atachEvents() {
    document.getElementById('loadBooks').addEventListener('click', async ev => {
        await getAllBooks();
    });

    document.getElementById('createForm').addEventListener('submit', createEntity);

    let id = '';
    document.querySelector('tbody').addEventListener('click', async (ev) => {
        if (ev.target.textContent == 'Delete') {
            id = ev.target.parentNode.parentNode.id;
            await deleteBook(id);
        }else if(ev.target.textContent == 'Edit'){
            id = await chnageForm(ev);
        }
    })

    document.getElementById('editForm').addEventListener('submit', async (ev) => {
        await updateBookEntity(ev, id);
        await getAllBooks();
    });
}

atachEvents();



async function getAllBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    
    Object.entries(data).forEach(([k, x]) => {
        const tr = e('tr', {id: k}, 
        e('td', {}, x.title), 
        e('td', {}, x.author),
        e('td', {}, e('button', {}, 'Edit'), 
        e('button', {}, 'Delete'))  
        )
        tbody.appendChild(tr);
    });
}


async function createEntity(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = ([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));

    if (!data.title || !data.author) {
        return;
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: data.title, author: data.author})
    });

    ev.target.reset();
    await getAllBooks();
}



async function deleteBook(id) {

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'DELETE',
    });

    ev.target.parentNode.parentNode.remove();
    await getAllBooks();
}

async function chnageForm(ev) {
    const editForm = document.getElementById('editForm');
    editForm.style.display = 'block';
    document.getElementById('createForm').style.display = 'none';

    const id = ev.target.parentNode.parentNode.id;
    const currentBook = await getBookById(id);
    const title = currentBook.title;
    const author = currentBook.author;
    const titleInput = 
    document.querySelector('[name="editTitle"]').value = title
    document.querySelector('[name="editAuthor"]').value = author

    return id;
}

async function updateBookEntity(ev, id) {
    ev.preventDefault();
    const formData = new FormData(ev.target)
    const title = formData.get('title')
    const author =  formData.get('author');

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, author})
    });
    ev.target.reset();
}


async function getBookById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id);
    const data = await response.json();
    
    return data;
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}