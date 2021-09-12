/*
 * @Descripttion:
 * @version:
 * @Author: jimmy
 * @Date: 2021-09-12 14:41:42
 * @LastEditors: jimmy
 * @LastEditTime: 2021-09-12 14:54:28
 */
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import App from "./App.vue";
import router from './router'

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
	render: (h) => h(App),
}).$mount("#app");
