import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import VueCountryCode from "vue-country-code-select";
Vue.use(VueCountryCode);


new Vue({
  render: h => h(App),
}).$mount('#app')
