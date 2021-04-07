import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    ITEM_CREATE: '/data/memes',
    ITEMS: '/data/memes?sortBy=_createdOn%20desc',
    ITEM_BY_ID: '/data/memes/',
    MY_ITEMS: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
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


export async function getAllItems() {
    return await api.get(endpoints.ITEMS);
}

export async function getItemById(id) {
    return await api.get(endpoints.ITEM_BY_ID + id);
}

export async function createItem(element) {
    return await api.post(endpoints.ITEM_CREATE , element);
}

export async function editItem(id, element) {
    return await api.put(endpoints.ITEM_BY_ID + id, element);
}

export async function deleteItemById(id) {
    return await api.delete(endpoints.ITEM_BY_ID + id);
}

export async function getItemsByUserId() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(endpoints.MY_ITEMS(userId));
}
