function attachEvents() {
    window.addEventListener('load', async () => {
        await onLoadBtn();
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('guest').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'inline-block';
            document.getElementById('logoutBtn').addEventListener('click', logout);
        } else {
            document.getElementById('guest').style.display = 'inline-block';
            document.getElementById('logoutBtn').style.display = 'none';

        }
    });
    document.querySelector('.load').addEventListener('click', onLoadBtn);
    document.getElementById('catches').addEventListener('click', handleCatchersDivClick);
    document.getElementById('addForm').addEventListener('submit', addCatch)
}

async function handleCatchersDivClick(ev) {
    if (ev.target.className == 'delete') {
        const id = ev.target.parentNode.dataset.id;
        await deleteCatch(id);
        await onLoadBtn();
    }else if(ev.target.className == 'update'){
        const id = ev.target.parentNode.dataset.id;
        const angler = ev.target.parentNode.querySelector('.angler').value;
        const weight = ev.target.parentNode.querySelector('.weight').value;
        const species = ev.target.parentNode.querySelector('.species').value;
        const location = ev.target.parentNode.querySelector('.location').value;
        const bait = ev.target.parentNode.querySelector('.bait').value;
        const captureTime = ev.target.parentNode.querySelector('.captureTime').value;
        await updateCatch(id, {angler, weight, species, location, bait, captureTime});
        await onLoadBtn();
    }
}
attachEvents();
async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        },
    });
    if (response.status == 200) {
        sessionStorage.removeItem('authToken');
        window.location.pathname = 'index.html';
    } else {
        console.error(await response.json());
    }
}

async function onLoadBtn() {
    const catchesDiv = document.getElementById('catches');
    catchesDiv.innerHTML = '';
    const data = await getAllCatches();
    data.forEach(c => {
        const div = e('div', {Id: c._id, className: 'catch'}, [
            e('lable', {}, 'Angler'), 
            e('input', {type: 'text', className: 'angler', value: c.angler}), 
            e('hr'), 
            e('lable', {}, 'Weight'), 
            e('input', {type: 'text', className: 'weight', value: c.weight}), 
            e('hr'), 
            e('lable', {}, 'Species'), 
            e('input', {type: 'text', className: 'species', value: c.species}), 
            e('hr'), 
            e('lable', {}, 'Location'), 
            e('input', {type: 'text', className: 'location', value: c.location}), 
            e('hr'), 
            e('lable', {}, 'Bait'), 
            e('input', {type: 'text', className: 'bait', value: c.bait}), 
            e('hr'), 
            e('lable', {}, 'Capture'), 
            e('input', {type: 'text', className: 'captureTime', value: c.captureTime}), 
            e('hr'), 
            e('button', {disabled: true, className: 'update'}, 'Update'), 
            e('button', {disabled: true, className: 'delete'}, 'Delete')
        ])
        div.setAttribute('data-id', c._id);
        div.setAttribute('data-ownerId', c._ownerId);
        catchesDiv.appendChild(div);
        if (sessionStorage.getItem('authToken') != null){
            [...document.querySelectorAll('button')].forEach(x => x.disabled = false);
        }else{
            [...document.querySelectorAll('button')].forEach(x => x.disabled = true);
        }
    })
}

async function getAllCatches() {
    const data = await request('http://localhost:3030/data/catches');
    return data;
}

async function addCatch(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = ([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));

    if (!data.angler || !data.weight || !data.species || !data.location || !data.bait || !data.captureTime) {
        return;
    }
    await createCatch(data);

    ev.target.reset();
    await onLoadBtn();
}

async function createCatch(catchObj) {
    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return window.location.pathname = 'login.html';
    }
    const options = {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token  
        },
        body: JSON.stringify(catchObj)
    };

    const currentCatch = await request('http://localhost:3030/data/catches', options);
    return currentCatch;
}

async function updateCatch(id, catchObj) {
    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return window.location.pathname = 'login.html';
    }
    const options = {
        method: 'put',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token  
        },
        body: JSON.stringify(catchObj)
    };

    const updatedCatch = await request('http://localhost:3030/data/catches/' + id, options);
    return updatedCatch;
}

async function deleteCatch(id) {
    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return window.location.pathname = 'login.html';
    }
    const options = {
        method: 'delete',
        headers: {'X-Authorization': token}
    };

    const deletedCatch = await request('http://localhost:3030/data/catches/' + id, options);
    return deletedCatch;
}

async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

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


