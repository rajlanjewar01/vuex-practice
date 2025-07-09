<template>
	<h1>Events for Good</h1>
	<div class="events">
		<EventCard v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as eventStoreTypes from '@/store/events/constants';
const eventStore = createNamespacedHelpers(eventStoreTypes.NAMESPACE);

import EventCard from '@/components/EventCard.vue'

export default {
	name: 'EventList',

	components: {
		EventCard
	},

	methods: {
		...eventStore.mapActions({
			fetchEvents: eventStoreTypes.FETCH_EVENTS
		})
	},

	computed: {
		...eventStore.mapState(['events'])
	},

	created() {
		this.fetchEvents();
	}
}
</script>

<style scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
