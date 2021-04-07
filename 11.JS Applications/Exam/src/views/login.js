import {html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';


const loginTemplate = (onSubmit) => html``;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // const email = formData.get('email').trim();
        // const password = formData.get('password').trim();

        try {
            // if (email == '' || password == '') {
            //     throw new Error('All fields are reqired');
            // }

            //await login(email, password);
            event.target.reset();
            ctx.setUserNav();
            //ctx.page.redirect('/catalog');
        } catch (err) {
           return alert(err.message)
        }
    }
}