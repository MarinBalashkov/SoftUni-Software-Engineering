import {html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';


const loginTemplate = (onSubmit) => html`
<h1>Login</h1>
<p class="form-info">Don't have account?
    <a href="/register">Register now</a> and fix that!
</p>
<form @submit=${onSubmit}>
    <div>
        <input type="email" placeholder="Email..." name="email">
    </div>

    <div>
        <input type="password" placeholder="Password..." name="password">
    </div>
    <div>
        <button>Login</button>
    </div>
</form>`;

export async function loginPage(ctx) {
    if(!ctx.user){
        ctx.render(loginTemplate(onSubmit));
    }else{
        ctx.page.redirect('/catalog')
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            if (email == '' || password == '') {
                throw new Error('All fields are reqired');
            }

            await login(email, password);
            event.target.reset();
            ctx.setUserNav();
            ctx.page.redirect('/catalog');
        } catch (err) {
           return alert(err.message)
        }
    }
}