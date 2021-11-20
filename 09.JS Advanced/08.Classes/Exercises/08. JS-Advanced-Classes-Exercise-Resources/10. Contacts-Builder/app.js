class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online(){
        return this._online;
    }

    set online(value){
        const firstDiv = document.querySelector('.title')
        if (value == true) {
            firstDiv.classList.add('online');
        } else {
            firstDiv.classList.remove('online');
        }
        
        this._online = value;
    }

    render(id) {
        const element = document.getElementById(id);
        // const emptyArticle = document.querySelector('#main>article')
        // const contactElement = emptyArticle.cloneNode(true);
        // const text = document.createTextNode(this.phone)
        // contactElement.children[0].innerText = `${this.firstName} ${this.lastName}`;
        // contactElement.children[1].children[0].innerText = `${this.phone}`
        // contactElement.children[1].children[1].innerText = `${this.email}`

        const article = document.createElement('article');
        const firstDiv = document.createElement('div');
        const secondDiv = document.createElement('div');
        firstDiv.textContent = `${this.firstName} ${this.lastName}`;
        firstDiv.classList.add('title');
        const button = document.createElement('button');
        button.innerHTML = '&#8505;';
        
        button.addEventListener('click', () => {
            this._online == false ? this._online = true : this._online = false
            secondDiv.style.display == 'none' ? secondDiv.style.display = 'block' : secondDiv.style.display = 'none';
            if (secondDiv.style.display == 'block') {
                firstDiv.classList.add('online');
            } else {
                firstDiv.classList.remove('online');
            }
        })

        firstDiv.appendChild(button);
        article.appendChild(firstDiv);

        secondDiv.classList.add('info');
        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        const emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`;
        secondDiv.appendChild(phoneSpan);
        secondDiv.appendChild(emailSpan);
        secondDiv.style.display = 'none';
        article.appendChild(secondDiv);


        element.appendChild(article);

    }
}

window.addEventListener('load', () => {
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].online = true, 2000);

})
