function toggle() {
    const button = document.querySelector('.head span').textContent;
    if (button === 'More') {
        document.querySelector('.head span').textContent = 'Less';
        document.querySelector('#extra').style.display = 'block';
    } else {
        document.querySelector('.head span').textContent = 'More';
        document.querySelector('#extra').style.display = 'none';
    }
}