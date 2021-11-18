import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

export default new Vuex.Store({
	state: {
		menus: [],
    	},
	getters: {
		menuItems(state) {
			return state.menus;
		},
        },
    	mutations,
    	actions,
});