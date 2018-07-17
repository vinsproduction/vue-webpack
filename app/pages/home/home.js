
import { mapActions } from 'vuex'

export default {

	data() {
		return {
			test: this.$store.state.counter.count
		}
	},

	methods: {
		
		// Put Store actions to methods
		...mapActions([
			'setCounter'
		]),

		add() {
			
			// Commit to Store
			this.setCounter(++this.test);

			this.test = this.$store.state.counter.count;
	
		}
	}

}