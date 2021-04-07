function solve() {
    const nameElement = document.querySelector('[name="lecture-name"]');
    const dateElement = document.querySelector('[name="lecture-date"]');
    const modulElement = document.querySelector('[name="lecture-module"]');
    const addButton = document.querySelector('.form-control>button');
    const modulsDiv = document.querySelector('.modules');

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (nameElement.value === '' || dateElement.value === '' || modulElement.value === 'Select module') {
            return;
        }

        let [date, time] = dateElement.value.split('T');
        let newDate = date.split('-');
        const h3TextContent = `${modulElement.value.toUpperCase()}-MODULE`;




        const ul = document.createElement('ul');

        const li = document.createElement('li');
        li.classList.add('flex');

        const h4 = document.createElement('h4');
        h4.textContent = `${nameElement.value} - ${newDate.join('/')} - ${time}`;
        li.appendChild(h4);

        const delButton = document.createElement('button');
        delButton.classList.add('red');
        delButton.textContent = 'Del';
        delButton.addEventListener('click', (ev) => {
            if (Array.from(ev.target.parentNode.parentNode.children).length === 1) {
                ev.target.parentNode.parentNode.parentNode.remove();
            } else {
                ev.target.parentNode.remove();
            }

        })
        li.appendChild(delButton);

        let div = Array.from(modulsDiv.children).find(x => x.children[0].textContent === h3TextContent);
        if (div) {
            div.children[1].appendChild(li);
        } else {
            div = document.createElement('div');
            div.classList.add('module');
    
            const h3 = document.createElement('h3');
            h3.textContent = h3TextContent;
            div.appendChild(h3);
            ul.appendChild(li);
            div.appendChild(ul);
            modulsDiv.appendChild(div);
        }

        const sortedList = Array.from(div.children[1].children).sort((a, b) => (a.children[0].textContent.split(' - '))[1].localeCompare((b.children[0].textContent.split(' - '))[1]))
        sortedList.forEach(e => {
            div.children[1].appendChild(e);
        });
    })
};