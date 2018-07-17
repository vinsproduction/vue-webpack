import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			name: 'home',
			path: '/',
			component: () => import('./pages/home/home.vue')
		},
		{
			name: 'about',
			path: '/about',
			component: () => import('./pages/about/about.vue')
		},
	]
});
