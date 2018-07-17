import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import counter from './modules/counter'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		counter,
	},
	plugins: [createLogger()]
})