function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add');
    const openSection = document.querySelector('.orange').parentNode.parentNode.children[1];
    const inProgresSection = document.querySelector('.yellow').parentNode.parentNode.children[1];
    const completeSection = document.querySelector('.green').parentNode.parentNode.children[1];

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!taskInput.value || !descriptionInput.value || !dateInput.value) {
            return;
        }

        openSection.appendChild(createArticle(taskInput.value, descriptionInput.value, dateInput.value));
        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    })



    function createArticle(task, description, date) {
        const article = e('article', {}, 
                                        e('h3', {}, task), 
                                        e('p', {}, `Description: ${description}`), 
                                        e('p', {}, `Due Date: ${date}`), 
                                        e('div', {className: "flex"}, 
                                                                    e('button', {className: "green", onClick: goInProgres}, 'Start'), 
                                                                    e('button', {className: "red", onClick: deleteArticle}, 'Delete')));
        
        return article;

        function deleteArticle(ev) {
            article.remove();
        }

        function goInProgres(ev) {
            const flexDiv =  article.querySelector('.flex');
            flexDiv.children[0].remove();
            flexDiv.appendChild(e('button', {className: "orange", onClick: goToFinish}, 'Finish'));

            inProgresSection.appendChild(article);
        }

        function goToFinish(ev) {
            const buttons =  article.querySelectorAll('button');
            buttons.forEach(x => x.remove());

            completeSection.appendChild(article);
            
        }
    }

}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}