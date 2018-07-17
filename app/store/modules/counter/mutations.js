
import { SET_COUNTER } from '../../mutationTypes'

export default {
	
	[SET_COUNTER](state, {type,payload}) {
		state.count = payload;
	}

}