import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import rgbtohex from '../views/rgbtohex.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/rgbtohex',
		name: '',
		component: rgbtohex,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
