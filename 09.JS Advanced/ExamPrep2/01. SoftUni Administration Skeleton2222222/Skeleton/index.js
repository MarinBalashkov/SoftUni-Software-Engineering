'use strict'
function solve() {
    const lectureName = document.querySelector('input[name="lecture-name"]');
    const lectureDate = document.querySelector('input[name="lecture-date"]');
    const lectureModule = document.querySelector('select[name="lecture-module"]');
    const addButton = document.querySelector('.form-control button');

    const trainings = document.querySelector('.modules');
    //console.log(lectureName, lectureDate, lectureModule, addButton, trainings);

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (lectureName.value == '' || lectureDate.value == '' || lectureModule.value == 'Select module') {
            return;
        }

        const date = new Date(lectureDate.value);

        const liElement = e('li', {className: "flex"}, 
                                                    e('h4', {}, `${lectureName.value} - ${date.getFullYear()}/${date.getMonth()}/${date.getDay()} - ${date.getHours()}:${date.getMinutes()}`),
                                                    e('button', {className: "red"}, 'Del'));
        
        const targetModule = Array.from(document.querySelectorAll('.module ul')).find(x => x.parentNode.innerText.includes(lectureModule.value));
        if (targetModule == undefined) {
            const modulElement = e('div', {className: "module"}, 
                                                                e('h3', {}, lectureModule.value), 
                                                                e('ul', {}, liElement)
            );

            trainings.appendChild(modulElement);
        }else {
            targetModule.appendChild(liElement);
        }

        Array.from(liElement.parentNode.children)
        .sort(((a, b) => (a.children[0].textContent.split(' - '))[1].localeCompare((b.children[0].textContent.split(' - '))[1])
        .forEach(x => liElement.parentNode.appendChild(x))));

    })

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

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
};