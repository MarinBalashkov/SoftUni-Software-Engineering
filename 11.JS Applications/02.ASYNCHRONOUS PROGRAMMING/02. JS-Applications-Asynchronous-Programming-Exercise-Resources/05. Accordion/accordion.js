 async function solution() {
    const mainSection = document.querySelector('#main');
    const articles = await getArticles()
    articles.map(a => {
    // <div class="accordion">
    //     <div class="head">
    //         <span>Scalable Vector Graphics</span>
    //         <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    //     </div>
    //     <div class="extra">
    //         <p>Scalable Vector Graphics .....</p>
    //     </div>
    // </div> 

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('accordion')

    const headDiv = document.createElement('div');
    headDiv.classList.add('head'
    );
    const span = document.createElement('span');
    span.textContent = a.title;
    
    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('id', `${a._id}`);
    button.textContent = 'More';
    const div = document.createElement('div');
    div.classList.add('extra');

    headDiv.appendChild(span);
    headDiv.appendChild(button);
    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(div);

    mainSection.appendChild(mainDiv);

    button.addEventListener('click', async (ev) => {
        
        if (ev.target.textContent == 'More') {
            const details = await getMoreDetails(a._id);
            const p = document.createElement('p');
            p.textContent = `${details.content}`;
            div.appendChild(p);
            div.style.display = 'block';
            ev.target.textContent = 'Less';
        } else {
            div.innerHTML = '';
            div.style.display = 'none';
            ev.target.textContent = 'More';
            
        }
    }) 
    })
}
solution();

async function getArticles(){
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
async function getMoreDetails(id){
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
