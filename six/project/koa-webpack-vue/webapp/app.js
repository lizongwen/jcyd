// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueRouter from 'vue-router';

import App from './App.vue';
import a from './components/a/a.vue';
import b from './components/b/b.vue';
import store from './store';

Vue.use(vueRouter);
const routes = [{
	path: '/a',
	component: a
}, {
	path: '/b',
	component: b
}];
const router = new vueRouter({
	mode: 'history',
	routes,
});
console.log(store);
const app = new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
});