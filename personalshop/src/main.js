import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueCarousel from 'vue-carousel'
import vueSmoothScroll from 'vue2-smooth-scroll'
import moment from 'vue-moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faHeadphones,
  faTruck,
  faCreditCard,
  faArrowDown,
  faArrowUp,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(vueCarousel)
Vue.use(moment)
Vue.use(vueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
})

library.add(
  faShoppingCart,
  faHeadphones,
  faTruck,
  faCreditCard,
  faArrowDown,
  faArrowUp,
  faAngleRight
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
