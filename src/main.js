import Vue from 'vue'
import App from './App.vue'
// import './scss/_variables.scss';
// import './scss/_typo.scss';
import Buefy from 'buefy'
import VueAnime from 'vue-animejs';
 
Vue.use(VueAnime)

Vue.use(Buefy)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
