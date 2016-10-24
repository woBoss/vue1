// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Apply from './components/Apply'
import Main from './components/main'
import home from './components/home'
import brand from './components/brand'
import represent from './components/represent'
import activity from './components/activity'
import Router from "vue-router"
/* eslint-disable no-new */
Vue.use(Router);
new Vue({
  el: '#app',
  router : new Router({
  	mode : "history",//确保服务端开放页面访问权限
  	routes : [
  		{
  			path :"/apply",
  			component : Apply
  		},
      {
        path : "/main",
        component : Main
      },
      {
        path : "/brand",
        component : brand
      },
      {
        path : "/represent",
        component : represent
      },
       {
        path : "/activity",
        component : activity
      },
      {
        path : "/",
        component : home
      }
        
  	]
  }),
  render: h => h(App)
})
