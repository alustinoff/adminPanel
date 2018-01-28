import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes=[
	{
		path: '/orders',
		component: require('./components/orders.vue')
	},
	{
		path: '/payments',
		component: require('./components/payments.vue')
	},
	{
		path: '/backs',
		component: require('./components/backs.vue')
	},
	{
		path: '/transactions',
		component: require('./components/transactions.vue')
	},
	{
		path: '/user',
		component: require('./components/user.vue')
	},
	{
		path: '/client',
		component: require('./components/client.vue')
	}
]

export default new VueRouter({
	routes,
	mode: 'history'
})