function solve() {
    const input = document.querySelector('#add-new');
    const [nameEl, hallEl, priceEL] = Array.from(input.querySelectorAll('#container input'));
    const btnOnScr = input.querySelector('#container>button');
    const moviesListArea = document.querySelector('#movies>ul');
    const archiveArea = document.querySelector('#archive>ul');
    const clearBtn = document.querySelector('#archive>button');


    const archive = {};

    btnOnScr.addEventListener("click", (ev) => {
        ev.preventDefault();
        name = nameEl.value;
        hall = hallEl.value;
        price = Number(priceEL.value);

        if (!name || !hall || !price) {
            return;
        }


        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;

        const hallStrong = document.createElement('strong');
        hallStrong.textContent = `Hall: ${hall}`;

        li.appendChild(span);
        li.appendChild(hallStrong);

        const div = document.createElement('div');

        const strong = document.createElement('strong');
        strong.textContent = price.toFixed(2);

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');

        const buttton = document.createElement('button');
        buttton.textContent = 'Archive';

        div.appendChild(strong);
        div.appendChild(input);
        div.appendChild(buttton);

        li.appendChild(div);

        moviesListArea.appendChild(li);

        nameEl.value = '';
        hallEl.value = '';
        priceEL.value = '';
    })

    moviesListArea.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            const soldTickNumber = ev.target.parentNode.querySelector('input');

            if (!Number(soldTickNumber.value)) {
                return;
            }

            const soldTickPrice = Number(ev.target.parentNode.querySelector('strong').textContent);
            const totalPrice = Number(soldTickNumber) * soldTickPrice;
            const name = ev.target.parentNode.parentNode.querySelector('span').textContent;

            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = name;

            const strong = document.createElement('strong');
            strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            const button = document.createElement('button');
            button.textContent = 'Delete';

            button.addEventListener('click', (ev) => {
                ev.target.parentNode.remove();
            })

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(button);

            archiveArea.appendChild(li)

            ev.target.parentNode.parentNode.remove();
        }
    })

    // archiveArea.addEventListener('click', (ev) => {
    //     if (ev.target.tagName === 'BUTTON') {
    //         ev.target.parentNode.remove();
    //     }
    // })

    clearBtn.addEventListener('click', (ev) => {
        Array.from(archiveArea.children).forEach(x => x.remove());
    })
}

function solve2() {
    const movieList = document.querySelector('#movies > ul');
    const archiveList = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive > button');
    const onScreenButton = document.querySelector('#container > button');

    clearButton.addEventListener('click', () => (archiveList.innerHTML = ''));
    onScreenButton.addEventListener('click', addMovie);

    function addMovie(ev) {
        const [name, hall, price] = [
            ...document.querySelectorAll('#container > input'),
        ].map((el) => el.value);
        ev.preventDefault();

        if (isValid(name, hall, price)) {
            createLi(name, hall, price);
            clearInputs();
        } else return;

        function createLi(name, hall, price) {
            const liElement = createElement('li', null, null);
            // apppend to movieSection
            const spanElement = createElement('span', name, null);
            // append to liElement
            const strongElement1 = createElement(
                'strong',
                `Hall: ${hall}`,
                null
            );
            // append to liElement
            const divElement = createElement('div', null, null);
            // append to liElement
            const strongElement2 = createElement(
                'strong',
                Number(price).toFixed(2),
                null
            );
            // append to divElement
            const inputElement = createElement('input', null, [
                'placeholder',
                'Ticket Sold',
            ]);
            // append to divElement
            const buttonElement = createElement('button', 'Archive', null);
            buttonElement.addEventListener('click', archiveMovie);

            // append all elements
            [strongElement2, inputElement, buttonElement].forEach((el) =>
                divElement.appendChild(el)
            );
            [spanElement, strongElement1, divElement].forEach((el) =>
                liElement.appendChild(el)
            );

            // append final element
            movieList.appendChild(liElement);

            function archiveMovie() {
                const soldTickets = inputElement.value;
                inputElement.value = '';

                if (
                    typeof Number(soldTickets) == 'number' &&
                    Number(soldTickets) > 0
                ) {
                    liElement.removeChild(strongElement1);
                    liElement.removeChild(divElement);

                    const totalBill = createElement(
                        'strong',
                        `Total amount: ${(
                            Number(price) * Number(soldTickets)
                        ).toFixed(2)}`,
                        null
                    );

                    const deleteBtn = createElement('button', 'Delete', null);
                    deleteBtn.addEventListener('click', () =>
                        liElement.remove()
                    );

                    liElement.appendChild(totalBill);
                    liElement.appendChild(deleteBtn);

                    archiveList.appendChild(liElement);
                } else return;
            }
        }

        function createElement(type, txt, attribute) {
            const el = document.createElement(type);
            if (txt) el.textContent = txt;
            if (attribute) el.setAttribute(attribute[0], attribute[1]);

            return el;
        }

        function isValid(name, hall, price) {
            return name != '' &&
                hall != '' &&
                typeof Number(price) == 'number' &&
                Number(price) > 0
                ? true
                : false;
        }

        function clearInputs() {
            [...document.querySelectorAll('#container input')].forEach(
                (el) => (el.value = '')
            );
        }
    }
}