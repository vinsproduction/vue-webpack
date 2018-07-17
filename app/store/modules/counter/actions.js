
import { SET_COUNTER } from './../../mutationTypes'

export default {

	setCounter(store, count) {

		store.commit({
			type: SET_COUNTER,
			payload: count
		});
	
	}

}