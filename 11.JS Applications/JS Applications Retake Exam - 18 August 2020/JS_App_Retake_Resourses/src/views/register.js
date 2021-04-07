import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';
//import { notify } from './common/notification.js';




const registerTemplate = (onSubmit) => html`
<h1>Register</h1>
<p class="form-info">Already registered?
    <a href="/login">Login now</a> and have some fun!
</p>

<form @submit=${onSubmit}>
    <div>
        <input type="email" placeholder="Email..." name="email">
    </div>
    <div>
        <input type="password" placeholder="Password" name="password">
    </div>
    <div>
        <input type="password" placeholder="Re-password" name="repeatPass">
    </div>
    <div>
        <p class="message"></p>
        <button>Register</button>
    </div>
</form>`;

export async function registerPage(ctx) {
    if(!ctx.user){
        ctx.render(registerTemplate(onSubmit));
    }else{
        ctx.page.redirect('/catalog')
    }
    

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim();

        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required!');
            }
            if (password != repass) {
                throw new Error('Passwords don\'t match!');
            }

            await register(email, password);
            event.target.reset();
            ctx.setUserNav();
            ctx.page.redirect('/catalog');
        } catch (err) {
           return alert(err.message);
        }
    }
}