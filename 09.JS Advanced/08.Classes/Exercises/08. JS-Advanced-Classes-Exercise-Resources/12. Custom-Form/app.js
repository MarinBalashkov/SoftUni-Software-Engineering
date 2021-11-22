'use strict';

let result = (function () {

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
            this._elements.forEach(e => e.value = inputValue);
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
        }
    }

    class Form {
        constructor(...elements) {
            this._element = this._createDivElement();
            this.textboxes = elements;
            this.submit();
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(value) {
            if (value.some(x => !(x instanceof Textbox))) {
                throw TypeError('argument must be of type Textbox')
            }

            this._textboxes = value;
            this._appendElements();
        }

        _createDivElement() {
            const divElement = document.createElement('div');
            divElement.classList.add('form');
            return divElement;
        }

        submit() {
            this.textboxes.forEach(x => {
                if (x.isValid()) {
                    x.elements.forEach(e => e.style.border = "2px solid green");
                } else {
                    x.elements.forEach(e => e.style.border = "2px solid red");
                }
            });

            return this.textboxes.some(x => x.isValid());
        }

        attach(selector) {
            document.querySelector(selector).prepend(this._element)
        }

        _appendElements() {
            this.textboxes.forEach(x => {
                x._elements.forEach(e => {
                    this._element.appendChild(e);
                })
            });
        }

    }

    return {
        Textbox: Textbox,
        Form: Form
    }

}())

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
