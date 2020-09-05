import Vue from "vue";
import App from "./App";
import store from "./store";
import Slider from "@jeremyhamm/vue-slider";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Slider);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
