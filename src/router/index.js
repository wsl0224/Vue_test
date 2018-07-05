import Vue from 'vue'
import Router from 'vue-router'
import loadPage from '@/components/loadPage'
import registered from '@/components/registered'
import mainPage from '@/components/mainPage'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loadPage',
      component: loadPage,
       meta:{
      	title:'登录'
      }
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered,
      meta:{
      	title:'用户注册'
      }
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage,
      children: [{
  					path: '/',
  					name: 'order',
  					component: order,
  					meta:{
    					title:'订单',
   				 	}
  				},]
    }
  ]
})
