import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
	},
	getters: {

	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = news
		}
	},
	actions: {
		FETCH_NEWS({ commit }) {
			fetchNewsList()
			.then(res => {
				commit('SET_NEWS', res.data);
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
});