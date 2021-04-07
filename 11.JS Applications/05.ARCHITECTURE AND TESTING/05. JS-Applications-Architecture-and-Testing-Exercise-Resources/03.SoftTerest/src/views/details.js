import { e } from '../dom.js';
import { getIdeaById, deleteIdeaById } from '../api/data.js';

function createIdeaDetails(idea, isOwner, goTo) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(e('img', { className: 'det-img', src: `${idea.img}` }));
    fragment.appendChild(e('div', { className: 'desc' },
        e('h2', { className: 'display-5' }, `${idea.title}`),
        e('p', { className: 'infoType' }, 'Description:'),
        e('p', { className: 'idea-description' }, `${idea.description}`)));
    if (isOwner) {
        fragment.appendChild(e('div', { className: 'text-center' },
            e('a', { className: 'btn detb', href: '', onclick: deleteIdea }, 'Delete')));
    }

    return fragment;

    async function deleteIdea(ev) {
        ev.preventDefault();
        const confirmt = confirm('are you shure you want to premanently remove this item?');
        if (confirmt) {
            await deleteIdeaById(idea._id);
            goTo('dashboard');
        }

    }
}

export function setupDetails(section, navigation) {

    return showDetails;

    async function showDetails(id) {
        const userId = sessionStorage.getItem('userId')
        const idea = await getIdeaById(id);
        section.innerHTML = '';
        section.appendChild(createIdeaDetails(idea, idea._ownerId == userId, navigation.goTo));
        return section;
    }
}