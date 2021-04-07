import { getIdeas } from '../api/data.js';
import { e } from '../dom.js';

function createIdeaCard(idea) {
    const element = e('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20rem';
    element.style.height = '18rem';
    element.innerHTML = `<div class="card-body">
                                <p class="card-text">${idea.title}</p>
                        </div>
                        <img class="card-image" src="${idea.img}" alt="Card image cap">
                        <a data-id = ${idea._id} class="btn" href="">Details</a>`;
    
    return element;

}

export function setupDashboard(section, navigation) {
    section.addEventListener('click', ev => {
        if (ev.target.classList.contains('btn')) {
            ev.preventDefault();
            navigation.goTo('details', ev.target.dataset.id);
        }
    })
    return showDashboard;

    async function showDashboard() {
        section.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const ideas = await getIdeas();
        if (ideas.length == 0) {
            const h1= e('h1', {}, 'No ideas yet! Be the first one :)')
            fragment.appendChild(h1);
        } else {
            ideas.map(createIdeaCard).forEach(x => fragment.appendChild(x));
        }

        section.appendChild(fragment);

        return section;
    }
}