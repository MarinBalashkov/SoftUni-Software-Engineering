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