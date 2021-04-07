import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    ELEMENTS: 'data/catalog',
    ELEMENT_BY_ID: 'data/catalog/',
    MY_ELEMENTS: (userId) => `data/catalog?where=_ownerId%3D%22${userId}%22`
    // RECIPE_COUNT: 'data/recipes?count',
    // RECENT_RECIPES: 'data/recipes?select=' + encodeURIComponent('_id,name,img') + '&sortBy=' + encodeURIComponent('_createdOn desc'),
    // RECIPES: 'data/recipes',
    // COMMENTS: 'data/comments',
    // COMMENT_BY_ID: 'data/comments/',
    // COMMENTS_BY_RECIPE_ID: 'data/comments?where=' + encodeURIComponent('recipeId='),
};

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);


export async function getAllElements(search) {
    if (search) {
        return await api.get(endpoints.ELEMENTS + '?where=' + encodeURIComponent(`make LIKE "${search}"`));
    }else{
        return await api.get(endpoints.ELEMENTS);
    }
}

export async function getElementById(id) {
    return await api.get(endpoints.ELEMENT_BY_ID + id);
}

export async function createElement(element) {
    return await api.post(endpoints.ELEMENTS, element);
}

export async function editElement(id, element) {
    return await api.put(endpoints.ELEMENT_BY_ID + id, element);
}

export async function deleteElementById(id) {
    return await api.delete(endpoints.ELEMENT_BY_ID + id);
}

export async function getElementsByUserId() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(endpoints.MY_ELEMENTS(userId));
}
