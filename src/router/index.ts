import {
	createRouter,
	createWebHistory,
	RouteRecordRaw,
} from 'vue-router';
import { defineAsyncComponent } from "vue";

const MainView = defineAsyncComponent( () => import( '@/views/MainView.vue' ) );

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'main',
		component: MainView,
	},
	// {
	//     path: '/about',
	//     name: 'about',
	//     // route level code-splitting
	//     // this generates a separate chunk (about.[hash].js) for this route
	//     // which is lazy-loaded when the route is visited.
	//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
];

const router = createRouter( {
	history: createWebHistory(), // без сервера в production не будет выводить компоненты
	routes,
} );

export default router;
