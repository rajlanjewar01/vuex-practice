<template>
	<div v-if="event">
		<h1>{{ event.title }}</h1>
		<p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
		<p>{{ event.description }}</p>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as eventStoreTypes from '@/store/events/constants';

const eventStore = createNamespacedHelpers(eventStoreTypes.NAMESPACE);

export default {
	props: ['id'],

	methods: {
		...eventStore.mapActions({
			fetchEvent: eventStoreTypes.FETCH_EVENT
		}),
	},

	computed: {
		...eventStore.mapState(['event'])
	},

	created() {
		this.fetchEvent(this.id);
	}
}
</script>
