// MAIN WEBPACK AREA
// node x view controller space
//import Vue or React
import Vue from 'vue'
import router from './router/router.js'
import App from './App.vue'

console.log('its webpack bruh')

Vue.config.productionTip = false

// REACT DOM render equivalent
const vm = new Vue({
  components: {App},
  router,
  template: '<App />'
  //store,
}).$mount('#render-target')
