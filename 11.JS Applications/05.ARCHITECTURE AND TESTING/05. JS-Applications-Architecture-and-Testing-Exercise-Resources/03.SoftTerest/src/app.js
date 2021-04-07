//setup views
//setup nav links
// show appropriate navigation based on user session
//start app in home
import { logout as apiLogout } from './api/data.js';
import { setupHome } from './views/home.js';
import { setupDashboard } from './views/dashboard.js';
import { setupCreate } from './views/create.js';
import { setupDetails } from './views/details.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';


const main = document.querySelector('main');
const nav = document.querySelector('nav');


const views = {};
const links = {};

const navigation = {
    goTo, 
    setUserNav
};

registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboardLink');
registerView('create', document.getElementById('create-page'), setupCreate, 'createLink');
registerView('details', document.getElementById('details-page'), setupDetails, 'detailsLink');
registerView('login', document.getElementById('login-page'), setupLogin, 'loginLink');
registerView('register', document.getElementById('register-page'), setupRegister, 'registerLink');
document.getElementById('views').remove();


setupNavigation();

navigation.goTo('home')

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const sectiopn = await view(...params);
    main.appendChild(sectiopn);
}

function setupNavigation(params) {
    setUserNav();

    nav.addEventListener('click', async (ev) => {
        const viewName = links[ev.target.id]
        if (viewName) {
            ev.preventDefault();
            goTo(viewName);
        }
        if (ev.target.id == 'logoutBtn') {          
            try {
                ev.preventDefault();
                await apiLogout();
                navigation.setUserNav();
                navigation.goTo('home');
            } catch (err) {
                alert(err.message);
            }
        }
    })
}

function setUserNav() {
    const token = sessionStorage.getItem('userToken');
    if (token != null) {
        [...nav.querySelectorAll('.user-nav')].forEach(x => x.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(x => x.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(x => x.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(x => x.style.display = 'list-item');
    }
}