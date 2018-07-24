import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import styles from './assets/scss/app.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faChevronLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
