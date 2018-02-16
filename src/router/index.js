import Vue from 'vue'
import Router from 'vue-router'
import Toptab from '@/view/toptab'
import Bookstore from '@/view/bookstore'
import Bookshelf from '@/view/bookshelf'
import Community from '@/view/community'
import Home from '@/view/home'
import Seach from '@/view/seach'
import Setting from '@/view/setting'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      component: Toptab,
      children: [
        { 
        	path: '',
        	component: Bookstore 
        },
        {
          	path: 'bookstore',
          	component: Bookstore
        },
        {
    		path: 'bookshelf',
      		component: Bookshelf
        },
        {
        	path: 'community',
      		component: Community
        }
      ]
    },
    {
    	path:'/seach',
    	component:Seach
    },
    {
    	path:'/home',
    	component:Home
    },{
    	path:'/setting',
    	component:Setting
    }
   
  ]
})
