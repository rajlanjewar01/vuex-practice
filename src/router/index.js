import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetails from '@/views/EventDetails.vue'
import EventCreate from '@/views/EventCreate.vue'

const routes = [
	{
		path: '/',
		name: 'EventList',
		component: EventList
	},
	{
		path: '/event/:id',
		name: 'EventDetails',
		props: true,
		component: EventDetails
	},
	{
		path: '/event/create',
		name: 'EventCreate',
		component: EventCreate
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router