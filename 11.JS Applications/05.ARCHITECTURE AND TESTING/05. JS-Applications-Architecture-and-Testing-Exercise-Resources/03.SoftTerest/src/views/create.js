import { createIdea } from '../api/data.js';

export function setupCreate(section, navigation) {
    const form = section.querySelector('form');

    form.addEventListener('submit', onSubmit)
    return showCreate;

    async function showCreate() {
        return section;
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const idea = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageURL')
        }

        if (idea.title.length < 6) {
           return alert('The title should be at least 6 characters long');
        }

        if (idea.description.length < 10) {
            return alert('The description should be at least 10 characters long')
        }

        if (idea.img < 5) {
           return alert('The image should be at least 5 characters long')
        }

        try {
            await createIdea(idea);
            navigation.goTo('dashboard')

        } catch (err) {
            alert(err.message);
        }


    }
}