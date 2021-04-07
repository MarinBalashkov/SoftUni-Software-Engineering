import {setupHome, showHome} from './home.js';
import {setupCreate, showCreate} from './create.js';
import {setupEdit} from './edit.js';
import {setupDetails} from './details.js';
import {setupLogin, showLogin} from './login.js';
import {setupRegister, showRegister} from './register.js';

const main  = document.getElementById('main');

const links = {
    'homeLink': showHome, 
    'loginLink': showLogin,
    'registerLink': showRegister, 
    'createLink': showCreate
}

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section)
}

setupNavigation();
showHome();

function setupNavigation() {
    const email = sessionStorage.getItem('email');
    const welcome = document.getElementById('welcomeEmail');
    if (sessionStorage.getItem('authToken') != null) {
        [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'none'); 
        welcome.textContent = `Welcome, ${email}`   
    } else {
        [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'block');   
    }

    document.querySelector('nav').addEventListener('click', (event) => {
        const view = links[event.target.id];
        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    })

    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();        
    })

    document.getElementById('logoutBtn').addEventListener('click', (event) => {
        event.preventDefault();
        logout();
    })
}

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        },
    });
    if (response.status == 200) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'block'); 
        showHome();
    } else {
        console.error(await response.json());
    }
}
