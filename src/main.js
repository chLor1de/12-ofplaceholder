import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import styles from './assets/scss/app.scss'
import VueAnalytics from 'vue-analytics'
import VModal from 'vue-js-modal'
import VueCarousel from 'vue-carousel';
import VueLazyload from 'vue-lazyload'



Vue.use(VueLazyload)
Vue.use(VueCarousel)
Vue.use(VModal)
Vue.use(VueAnalytics, {
    id: 'UA-114025874-4'
})

import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faChevronLeft, faAngleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
