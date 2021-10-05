// function focused() {
//     Array.from(document.querySelectorAll('input')).forEach(x => {
//         x.addEventListener('focus', onFocus);
//         x.addEventListener('blur', onBlur);
//     })

//     function onFocus(e) {
//         e.target.parentNode.className = 'focused';
//     }

//     function onBlur(e) {
//         e.target.parentNode.className = '';
//     }
// }

function focused() {
    let parentDiv = document.querySelector('body > div');
    console.log(parentDiv);
    parentDiv.addEventListener('click', (e) => {
        if (e.currentTarget.tagName == 'INPUT') {
            console.log('in if statment');
            e.currentTarget.parentNode.className = 'focused';
        }
    });
    parentDiv.addEventListener('blur', (e) => {
        if (e.target && e.target.tagName == 'INPUT') {
            e.target.parentNode.className = '';
        }
    });
}