function colorize() {
    // TODO
    [...document.querySelectorAll('tr:nth-child(even)')].forEach(x => x.style.background = "red");
}