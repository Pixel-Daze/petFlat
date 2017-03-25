import * as api from '../../api/baseApi'

const state = {
	indexPetList:[]
}

const actions = {
	FETCH_INDEX_PETLIST:({commit,state},url)=>{
		return api.getPetList()
			.then(resp=>{
				let Data = resp.data.data
				commit('SET_INDEX_PETLIST',{Data})
			})
	}
}

const mutations = {
	SET_INDEX_PETLIST:(state,{Data}) => {
		state.indexPetList = Data
	}
}

const getters = {
	activeIndexPetList(state){
		return state.indexPetList
	}
}

export default {
	state,
	actions,
	mutations,
	getters
}