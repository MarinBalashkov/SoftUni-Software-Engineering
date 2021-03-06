import { showHome } from "./home.js";

let main;
let section

export async function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    async function onSubmit(data) {
        if (data.password != data.repeatPassword) {
            return alert('Passwords don\'t match');
        }

        const body = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await response.json();
            if (response.status == 200) {
                sessionStorage.setItem('authToken', data.accessToken);
                sessionStorage.setItem('userId', data._id);
                sessionStorage.setItem('email', data.email);
                [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'block');
                [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'none');
                document.getElementById('welcomeEmail').textContent = `Welcome, ${data.email}`;
                showHome();
            } else {
                alert(data.message);
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}