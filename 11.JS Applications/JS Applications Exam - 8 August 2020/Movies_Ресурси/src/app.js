import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';


import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';

import * as api from './api/data.js';
window.api = api;

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();


page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/create', decorateContext, createPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);


page.start();


function decorateContext(ctx, next) {
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    ctx.render = (content) => render(content, main);

    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');
        document.getElementById('welcome').textContent = `Welcome ${user.email}`;
    } else {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'block');
    }
}

function logout(event) {
    apiLogout();
    setUserNav();
    page.redirect('/');
}