async function lockedProfile() {
    const main = document.getElementById('main');
    try {
        const usersData = await getUsersInfo();
        createProfiles(main, usersData);
        main.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const profile = e.target.parentNode;
                const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

                if (isLocked) {
                    return;
                }

                let div = profile.querySelector('div');
                let isVisible = div.style.display === 'block'
                div.style.display = isVisible ? 'none' : 'block';
                e.target.textContent = !isVisible ? 'Hide it' : 'Show more'

            }
        })
    } catch (error) {

    }
}

async function getUsersInfo() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createProfiles(main, usersData) {
    Object.values(usersData).forEach(x => {
        const div = e('div', { className: 'profile' }, [
            e('img', { src: './iconProfile2.png', className: 'userIcon' }),
            e('lable', {}, 'Lock'),
            e('input', { type: 'radio', name: `${x.username}RadioBtn`, value: 'lock', checked: true }),
            e('lable', {}, 'Unlock'),
            e('input', { type: 'radio', name: `${x.username}RadioBtn`, value: 'unlock' }),
            e('br'),
            e('hr'),
            e('lable', {}, 'Username'),
            e('input', { type: 'text', name: `user${x}`, value: `${x.username}`, readonly: 'true', disabled: 'true' }),
            e('div', { id: 'userHiddenFields', style: 'display:none' },
                e('hr', {}, ''),
                e('label', {}, 'Email:'),
                e('input', {
                    type: 'email', name: `${x.username}Email`, value: `${x.email}`,
                    disabled: true, readonly: true
                }),
                e('label', {}, 'Age:'),
                e('input', {
                    type: 'email', name: `${x.username}Age`, value: `${x.age}`,
                    disabled: true, readonly: true
                })),
            e('button', {}, 'Show more')
        ])

        main.appendChild(div);
    });
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}