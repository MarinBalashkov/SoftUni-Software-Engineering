import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout as apiLogout} from './api/data.js';


import {catalogPage} from './views/catalog.js';
import {myFurniturePage} from './views/my-furniture.js';
import {createPage} from './views/create.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {editPage} from './views/edit.js';
import {detailsPage} from './views/details.js';

const main = document.querySelector('.container');

import * as api from './api/data.js';
window.api = api;

const links = {
    '/': 'catalogLink', 
    '/catalog': 'catalogLink', 
    '/my-furniture': 'profileLink',
    '/create': 'createLink',
    '/register': 'registerLink', 
    '/login': 'loginLink'
}

page('/', renderMiddleware, catalogPage);
page('/catalog', renderMiddleware, catalogPage);
page('/my-furniture', renderMiddleware, myFurniturePage);
page('/details/:id', renderMiddleware, detailsPage);
page('/edit/:id', renderMiddleware, editPage);
page('/create', renderMiddleware, createPage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);

document.getElementById('logoutBtn').addEventListener('click', logout);

page.start();

function renderMiddleware(ctx, next) {
    console.log(ctx);
    setUserNav();
    setActivNav(ctx.pathname);
    ctx.render = (content) => render(content, main);
    next();
}

async function logout(event) {
    event.preventDefault();
    try {
        await apiLogout();
        setUserNav();
        page.redirect('/');
    } catch (err) {
        alert(err.message);
    }
}


function setUserNav() {
    if (sessionStorage.getItem('userToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

function setActivNav(pathname) {
    const linkId = links[pathname];
    [...document.querySelectorAll('nav a')].forEach(a => a.classList.remove('active'));
    if (linkId) {
        document.querySelector('#' + linkId).classList.add('active');
    }
}