import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Page from "./components/Page";
import Login from "./components/Login";
import Trending from "./components/Trending";
import Signin from "./components/Signin";

import store from "./store";
import Slider from "@jeremyhamm/vue-slider";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Slider);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Page },
    { path: '/me', component: Page },
    { path: '/login', component: Login },
    { path: '/trending', component: Trending },
    { path: '/signin', component: Signin }
  ]
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
