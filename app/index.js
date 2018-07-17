import Vue from 'vue'
import router from './router'
import store from './store/store'
import './index.styl'







new Vue({
	router,
	store,
  template: require('./index.pug')()
}).$mount('#app')