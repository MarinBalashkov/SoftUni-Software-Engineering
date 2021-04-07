import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';
//import { notify } from './common/notification.js';




const registerTemplate = (onSubmit) => html``;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // const email = formData.get('email').trim();
        // const password = formData.get('password').trim();
        // const repass = formData.get('repeatPass').trim();

        try {
            // if (email == '' || password == '') {
            //     throw new Error('All fields are required!');
            // }
            // if (password != repass) {
            //     throw new Error('Passwords don\'t match!');
            // }

            //await register(email, password);
            event.target.reset();
            ctx.setUserNav();
            //ctx.page.redirect('/catalog');
        } catch (err) {
           return alert(err.message);
        }
    }
}