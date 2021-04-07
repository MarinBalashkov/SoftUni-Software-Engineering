import { clearUserData, getUserData, setUserData } from '../utility.js';

export default function createApi(beginRequest, endRequest) {
    const endpoints = {
        REGISTER: '/users/register',
        LOGIN: '/users/login',
        LOGOUT: '/users/logout'
    };

    return {
        beginRequest() {
            if (typeof beginRequest == 'function') {
                beginRequest();
            }
        },

        endRequest() {
            if (typeof endRequest == 'function') {
                endRequest();
            }
        },

        host(endpoint) {
            return `http://localhost:3030${endpoint}`;
        },

        getOptions(headers) {
            const options = { headers: headers || {} };
            
            const user = getUserData();

            if (user) {
                Object.assign(options.headers, { 'X-Authorization': user.accessToken });
            }

            return options;
        },

        async request(endpoint, options) {
            let response;

            this.beginRequest();
            try {
                response = await fetch(endpoint, options);

                if (response.status == 200) {
                    return await response.json();
                } else {
                    const error = await response.json();
                    throw new Error(error.message);
                }
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return response;
                } else if(err.message == 'Invalid access token') {
                    alert('Invalid session, resetting storage');
                    clearUserData();
                    window.location.pathname = '/';
                } else {
                    //alert(err.message)
                    throw err;
                }
            } finally {
                this.endRequest();
            }
        },

        async get(endpoint) {
            return this.request(this.host(endpoint), this.getOptions());
        },

        async post(endpoint, body) {
            const options = this.getOptions({ 'Content-Type': 'application/json' });
            options.method = 'POST';
            options.body = JSON.stringify(body);

            return this.request(this.host(endpoint), options);
        },

        async put(endpoint, body) {
            const options = this.getOptions({ 'Content-Type': 'application/json' });
            options.method = 'PUT';
            options.body = JSON.stringify(body);

            return this.request(this.host(endpoint), options);
        },

        async delete(endpoint) {
            const options = this.getOptions();
            options.method = 'DELETE';

            return this.request(this.host(endpoint), options);
        },

        async register(username, password) {
            const result = await this.post(endpoints.REGISTER, {
                username,
                password,
            });

            setUserData(result);
            return result;
        },

        async login(username, password) {
            const result = await this.post(endpoints.LOGIN, {
                username,
                password
            });

            setUserData(result)
            return result;
        },

        logout() {
            const result = this.get(endpoints.LOGOUT);
            clearUserData();
            return result;
        }
    };
};