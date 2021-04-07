import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout as apiLogout} from './api/data.js';

import {homePage} from './views/home.js';
import {catalogPage} from './views/catalog.js';
import {profilePage} from './views/profile.js';
import {createPage} from './views/create.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {editPage} from './views/edit.js';
import {detailsPage} from './views/details.js';

import * as api from './api/data.js';
window.api = api;

const main = document.querySelector('main');
setUserNav();
document.getElementById('logoutBtn').addEventListener('click', logout);
// const links = {
    //     '/': 'catalogLink', 
    //     '/catalog': 'catalogLink', 
    //     '/my-furniture': 'profileLink',
    //     '/create': 'createLink',
    //     '/register': 'registerLink', 
    //     '/login': 'loginLink'
    // }
    
    page('/', decorateContext, homePage);
    page('/home', decorateContext, homePage);
    page('/catalog', decorateContext, catalogPage);
    page('/profile', decorateContext, profilePage);
    page('/details/:id', decorateContext, detailsPage);
    page('/edit/:id', decorateContext, editPage);
    page('/create', decorateContext, createPage);
    page('/register', decorateContext, registerPage);
    page('/login', decorateContext, loginPage);
    
    page.start();
    

function decorateContext(ctx, next) {
    //console.log(ctx);
    ctx.setUserNav = setUserNav
    //setActivNav(ctx.pathname);
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
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.user span').textContent = `Welcome, ${sessionStorage.getItem('email')}`
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}