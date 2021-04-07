import { register } from '../api/data.js';


export function setupRegister(section, nav) {
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showRegister;

    function showRegister() {
        return section;
    }

    async function onSubmit(data) {
        if (data.password != data.repeatPassword) {
            return alert('Passwords don\'t match');
        }

        try {
            await register(data.email, data.password);
            nav.setUserNav();
            form.reset();
            nav.goTo('home');
        } catch (err) {
            alert(err.message);
        }
    }
}