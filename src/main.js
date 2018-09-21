import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');
