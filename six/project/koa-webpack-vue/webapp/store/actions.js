import * as types from './mutation-types'
export const addInfo = ({ commit }, data) => {
	commit(types.ADD_INFO, {
		txt: data.txt
	})
}