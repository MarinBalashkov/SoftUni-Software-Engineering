class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = this._getElements();
        this._attachEventListeners();
    }

    get value() {
        return this._value;
    }

    set value(inputValue) {
        this._value = inputValue;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    _getElements() {
        return [...document.querySelectorAll(this.selector)];
    }

    _attachEventListeners() {
        this._elements.forEach(x => {
            x.addEventListener('input', this._onChange.bind(this))
        });
    }

    _onChange(ev) {
        this.value = ev.target.value;
        this._elements.forEach(e => e.value = this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll('.textbox');

inputs.forEach(x => x.addEventListener('input',function(){console.log(textbox.value)}));
