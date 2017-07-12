// MAIN WEBPACK AREA
// node x view controller space
//import Vue or React
import Vue from 'vue'
import router from './router'
import App from './App.vue'

console.log('its webpack bruh')

// REACT DOM render equivalent
new Vue({
  components: { App },
  router,
  //store,
  template: '<App/>',
}).$mount('#render-target')
