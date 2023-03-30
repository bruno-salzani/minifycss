import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueApexCharts from 'vue-apexcharts';
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js';

import '@/assets/scss/index.scss';
import 'vue-nav-tabs/themes/vue-tabs.css';

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.use(VueTabs);

Vue.component('apexchart', VueApexCharts);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
