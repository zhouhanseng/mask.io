/*
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:41:42
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-12 19:34:40
 */
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import App from "./App.vue";
import router from './router';
import './styles/reset.css';


Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  router,
	render: (h) => h(App),
}).$mount("#app");
