import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import VueRouter from 'vue-router'
import routes from './routesConfig.js'
import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading/index.js'
import filters from './filters/'

Vue.use(VueRouter);
Vue.use(Loading);

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))

const router = new VueRouter({
	routes,
	// 切换路由时，自动滚到最上方
	scrollBehavior : ()=>({
		y : 0
	}),
	mode:"history"

})

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
	store.dispatch('showLoading')  
		return config;
	}, function (error) {
	  	return Promise.reject(error);
	});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  	store.dispatch('hideLoading')
	  	return response;
	}, function (error) {
	  	return Promise.reject(error);
	});

Vue.prototype.$http = axios;



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
