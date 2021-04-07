function attachEventsListeners() {
    const inputs = document.querySelectorAll('input[type=text]');
    const buttons = document.querySelectorAll('input[type=button]');

    buttons[0].addEventListener('click', (ev) =>{
        const inputValue = Number(inputs[0].value);
        inputs[1].value = inputValue * 24;
        inputs[2].value = inputValue * 1440;
        inputs[3].value = inputValue * 86400;
    })

    
    buttons[1].addEventListener('click', (ev) =>{
        const inputValue = Number(inputs[1].value);
        inputs[0].value = inputValue / 24;
        inputs[2].value = inputValue * 60;
        inputs[3].value = inputValue * 3600;
    })

    
    buttons[2].addEventListener('click', (ev) =>{
        const inputValue = Number(inputs[2].value);
        inputs[0].value = inputValue / 1400;
        inputs[1].value = inputValue / 60;
        inputs[3].value = inputValue * 60;
    })

    
    buttons[3].addEventListener('click', (ev) =>{
        const inputValue = Number(inputs[3].value);
        inputs[0].value = inputValue / 86400;
        inputs[1].value = inputValue / 3600;
        inputs[2].value = inputValue / 60;
    })

    console.log(inputs, buttons);
}