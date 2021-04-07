import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';
import { notifyError, notifySuccesss } from './common/notifications.js';
//import { notify } from './common/notification.js';




const registerTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <div class="form-group">
                <label for="repeatPassword">Repeat Password</label>
                <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
            </div>
        
            <button type="submit" class="btn btn-primary">Register</button>
        </form>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repeatPassword');

        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required!');
            }
            if (password != repass) {
                throw new Error('Passwords don\'t match!');
            }

            await register(email, password);
            event.target.reset();
            notifySuccesss("Successful registration!");
            ctx.setUserNav();
            ctx.page.redirect('/');
        } catch (err) {
           return notifyError(err.message);
        }
    }
}