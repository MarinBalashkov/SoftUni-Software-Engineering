import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    ITEM_CREATE: '/data/wiki',
    ITEMS: '/data/wiki?sortBy=_createdOn%20desc',
    RECENT_ITEMS: '/data/wiki?sortBy=_createdOn%20desc&distinct=category',
    SEARCH_ITEMS: (query) => `/data/wiki?where=title%20LIKE%20%22${query}%22`,
    ITEM_BY_ID: '/data/wiki/',
};

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);


export async function getAllItems() {
    return await api.get(endpoints.ITEMS);
}

export async function getAllItemsHomePage() {
    return await api.get(endpoints.RECENT_ITEMS);
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

export async function searchItems(query) {
    return await api.get(endpoints.SEARCH_ITEMS(query));
}

