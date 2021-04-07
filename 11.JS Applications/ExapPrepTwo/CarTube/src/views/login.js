import {html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';
// import { until } from '../../node_modules/lit-html/directives/until.js';
// import { notify } from './common/notification.js';


const loginTemplate = (onSubmit) => html`
<section @submit=${onSubmit} id="login">
    <div class="container">
        <form id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            if (username == '' || password == '') {
                throw new Error('All fields are reqired');
            }

            await login(username, password);
            event.target.reset();
            ctx.setUserNav();
            ctx.page.redirect('/catalog');
        } catch (err) {
           return alert(err.message)
        }
    }
}