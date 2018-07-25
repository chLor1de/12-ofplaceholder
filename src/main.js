import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import styles from './assets/scss/app.scss'
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scroll-to'


Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
    id: ['UA-XXX-X', '']
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
