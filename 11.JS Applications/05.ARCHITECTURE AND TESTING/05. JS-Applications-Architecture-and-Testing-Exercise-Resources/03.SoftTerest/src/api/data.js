import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    IDEAS_LIST: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    IDEA_BY_ID: 'data/ideas/',
    IDEAS: 'data/ideas',
    // RECIPE_COUNT: 'data/recipes?count',
    // RECENT_RECIPES: 'data/recipes?select=' + encodeURIComponent('_id,name,img') + '&sortBy=' + encodeURIComponent('_createdOn desc'),
};

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

export async function getIdeas(p) {
    return await api.get(endpoints.IDEAS_LIST);
}

// export async function getRecipeCount() {
//     return await api.get(endpoints.RECIPE_COUNT);
// }

// export async function getRecent() {
//     return await api.get(endpoints.RECENT_RECIPES);
// }

export async function getIdeaById(id) {
    return await api.get(endpoints.IDEA_BY_ID + id);
}

export async function createIdea(idea) {
    return await api.post(endpoints.IDEAS, idea);
}

// export async function editRecipe(id, recipe) {
//     return await api.put(endpoints.RECIPE_BY_ID + id, recipe);
// }

export async function deleteIdeaById(id) {
    return await api.delete(endpoints.IDEA_BY_ID + id);
}