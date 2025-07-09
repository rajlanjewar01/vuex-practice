import { createStore } from 'vuex';
import events from './events';

export default createStore({
	modules: {
		events
	}
});
