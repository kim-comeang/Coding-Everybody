import { fetchMenus } from '../api/menus';

export default {
    async FETCH_MENUS({ commit }, data) {
        const response = await fetchMenus(data);
        commit('SET_MENUS', response.data.payload.menus);
        return response;
    },
}