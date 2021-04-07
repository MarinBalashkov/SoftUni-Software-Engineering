import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';


import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { searchPage } from './views/search.js';

import * as api from './api/data.js';
window.api = api;

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();


page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/create', decorateContext, createPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/search', decorateContext, searchPage);


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
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function logout(event) {
    apiLogout();
    setUserNav();
    page.redirect('/');
}