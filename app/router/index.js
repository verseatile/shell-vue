import Vue from 'vue'
import VueRouter from 'vue-router'
import Land from '../components/Land.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'land',
      component: Land
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
