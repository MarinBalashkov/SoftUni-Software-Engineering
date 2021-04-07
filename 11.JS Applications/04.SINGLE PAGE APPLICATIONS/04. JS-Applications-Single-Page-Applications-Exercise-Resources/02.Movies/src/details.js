import { e } from './dom.js'
import { showEdit } from './edit.js';
import { showHome } from './home.js';

async function getMoviebyId(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);

    const data = await response.json();

    return data;
}

async function deleteMovie(id) {
    const token = sessionStorage.getItem('authToken');

    try {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'delete',
            headers: {
                'X-Authorization': token, 
            }
        });

        if (response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }


    } catch (err) {
        alert(err.message);
    }
}

async function getLikesByMovieId(movieId){
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct_ownerId&count`);
    const data  = await response.json();

    return data;
}

async function getOwneLikesByMovieId(movieId){
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030//data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data  = await response.json();

    return data;
}

async function likeMovie(id) {
    const token = sessionStorage.getItem('authToken');

    try {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token, 
            },
            body: JSON.stringify({movieId: id})
        });

        if (response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }


    } catch (err) {
        alert(err.message);
    }
}

function createMovie(movie, likes, owneLikes) {
    const element = e('div', { className: 'container', id: movie._id},
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })),
            e('div', { className: 'col-md-4 text-center' },
                e('h3', { className: 'my-3 ' }, 'Movie Description'),
                e('p', {}, `${movie.description}`),
                e('a', { className: 'btn btn-danger', href: '#' }, 'Delete'),
                e('a', { className: 'btn btn-warning', href: '#' }, 'Edit'),
                e('a', { className: 'btn btn-primary', href: '#' }, 'Like'),
                e('span', { className: 'enrolled-span' }, likes + ' like' + (likes == 1 ? '' : 's')))));

    return element;
}

let main;
let section

export async function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-danger')) {
            event.preventDefault();
            deleteMovie(event.target.parentNode.parentNode.parentNode.id);          
            showHome();
        }else if(event.target.classList.contains('btn-warning')){
            showEdit(event.target.parentNode.parentNode.parentNode.id);
        }else if(event.target.classList.contains('btn-primary')){
            likeMovie(event.target.parentNode.parentNode.parentNode.id);
        }
    })
}

export async function showDetails(id) {
    main.innerHTML = '';
    section.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const [movie, likes, owneLikes] = await Promise.all([
        getMoviebyId(id), 
        getLikesByMovieId(id), 
        getOwneLikesByMovieId(id)
    ])
    



    const movieDetailsElement = createMovie(movie, likes, owneLikes);
    fragment.appendChild(movieDetailsElement);
    section.appendChild(fragment);
    main.appendChild(section);

    if (sessionStorage.getItem('userId') == movie._ownerId) {
        document.querySelector('.btn-danger').style.display = 'inline-block';
        document.querySelector('.btn-warning').style.display = 'inline-block';
    } else {
        document.querySelector('.btn-danger').style.display = 'none';
        document.querySelector('.btn-warning').style.display = 'none';
    }

}