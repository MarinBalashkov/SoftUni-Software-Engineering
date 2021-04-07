import {e} from './dom.js';
import {showDetails} from './details.js';


async function getAllMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();

    return data;
}

function createMoviePreview(movie) {
    const element = e('div', {className: 'card mb-4'}, 
                        e('img', {className: 'card-img-top', src: movie.img, alt: 'Card image cap', width: 400}), 
                        e('div', {className: 'card-body'}, 
                            e('h4', {className: 'card-title'}, `${movie.title}`)), 
                        e('div', {className: 'card-footer'}, 
                            e('a', {href: '#'}, 
                                e('button', {id: `${movie._id}`, type: 'button', className: 'btn btn-info movieDetailsLink'}, 'Details'))));

    return element;
}

let main;
let section;
let container;

export async function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = document.querySelector('.card-deck.d-flex.justify-content-center');
    container.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.classList.contains('movieDetailsLink')){
            showDetails(event.target.id)
        }
    })
}

export async function showHome() {
    container.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);
    const movies = await getAllMovies();

    const cards =  movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    container.innerHTML = '';
    container.appendChild(fragment);
}