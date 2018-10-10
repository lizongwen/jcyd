import * as types from '../mutation-types';
const state = {
	data: []
}

// const actions = {
// 	checkout({ commit, state }) {
// 		commit(types.CHECKOUT_REQUEST)
// 	}
// }

const mutations = {
	// [types.CHECKOUT_REQUEST](state) {
	// 	return state.data;
	// },
	[types.ADD_INFO](state, { txt }) {
		state.data.push(txt);
		console.log(txt);
	}
}

export default {
	state,
	// actions,
	mutations
}