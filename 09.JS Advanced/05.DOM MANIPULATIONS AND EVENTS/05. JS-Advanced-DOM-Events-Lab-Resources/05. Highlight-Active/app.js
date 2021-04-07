function focused() {
    Array.from(document.querySelectorAll('input')).forEach(x => {
        x.addEventListener('focus', onFocus);
        x.addEventListener('blur', onBlur);
    })

    function onFocus(e) {
        e.target.parentNode.className = 'focused';
    }

    function onBlur(e) {
        e.target.parentNode.className = '';
    }
}