import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';


import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { buyPage } from './views/buy.js';
// import { normalCatalogPage } from './views/normalCatalog.js';
// import { myListingPage } from './views/myListings.js';
// import { searchByYearPage } from './views/searchByYear.js';

import * as api from './api/data.js';
window.api = api;

const main = document.querySelector('main');
const header = document.querySelector('header');
setUserNav();
//document.getElementById('logoutBtn').addEventListener('click', logout);

page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/buy/:id', decorateContext, buyPage);
page('/create', decorateContext, createPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
// page('/myListings', decorateContext, myListingPage);
// page('/searchByYear', decorateContext, searchByYearPage);


page.start();


function decorateContext(ctx, next) {
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    ctx.render = (content) => render(content, main);

    next();
}

function setUserNav() {
    const navTemplate = (user, logout) => html`
            <nav>
                <ul>
                    ${user != undefined
                    ? html`
                <li>
                    <a class="user" href="/create">Create new offer</a>
                </li>
                <li>
                    <a href="/">
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            <li id="welcome">Welcome, ${user.email} | 
                    <a @click=${logout} href="javascript:void(0)">Logout</a>
                </li>`
                    : html`
                <li class="site-logo">Shoe</li>
                <li>
                    <a href="/">
                    <img src="../public/sneakers.png" alt="">
                    </a>
                </li>
                <li class="site-logo">Shelf</li>`}
            </ul>
        </nav>`;

    const user = getUserData();
    //console.log(user);
    render(navTemplate(user, logout), header);

    function logout() {
        apiLogout();
        setUserNav();
        page.redirect('/');
    }
}

