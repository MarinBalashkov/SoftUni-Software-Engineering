const errorBox = document.getElementById('errorBox');
const successsBox = document.getElementById('successBox');


export function notifyError(message) {
    errorBox.parentNode.style.display = 'block';
    errorBox.textContent = message;
    setTimeout(errClear, 3000)
}

export function notifySuccesss(message) {
    successsBox.parentNode.style.display = 'block';
    successsBox.textContent = message;
    setTimeout(seccessClear, 3000)
}

function errClear() {
    errorBox.parentNode.style.display = 'none';
}

function seccessClear() {
    successsBox.parentNode.style.display = 'none';
}