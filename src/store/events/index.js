import * as types from './constants';
import EventService from '@/services/EventService.js';

const _state = {
	user: 'Raj',
	events: [],
	event: {}
};

const mutations = {
	[types.ADD_EVENT](state, event) {
		state.events.push(event);
	},

	[types.SET_EVENTS](state, events) {
		state.events = events;
	},

	[types.SET_EVENT](state, event) {
		state.event = event;
	}
};

const actions = {
	[types.CREATE_EVENT]({ commit }, event) {
		EventService.postEvent(event).then(() => {
			console.log('Event created successfully');
			commit(types.ADD_EVENT, event);
		}).catch(error => {
			console.log(error)
		})
	},

	[types.FETCH_EVENTS]({ commit }) {
		EventService.getEvents().then(response => {
			commit(types.SET_EVENTS, response.data);
		}).catch(error => {
			console.log(error)
		})
	},

	[types.FETCH_EVENT]({ commit }, id) {
		// const existingEvent = Object.values(this.state.events).find(event => event.id === this.id);

		// if(existingEvent){
		// 	commit(types.SET_EVENT, existingEvent);
		// }
		// else {
			EventService.getEvent(id).then(response => {
				commit(types.SET_EVENT, response.data);
			})
			.catch(error => {
				console.log(error)
			})
		// }
	}
};

export default {
	namespaced: true,
	state: _state,
	mutations,
	actions
}
