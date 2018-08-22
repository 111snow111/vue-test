import Vue from 'vue'
import Router from 'vue-router'
import goodslist from './../views/goodslist'
import titlt from './../views/titlt'
import image from './../views/image'
import cart from '@/views/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodslist',
      component: goodslist,
      children:[
        {
        	path:'titlt',
        	name:"titlt",
        	component:titlt
        },
        {
        	path:'image',
        	name:"image",
        	component:image
        }
      ]
    },
    {
    	path:'/cart',
    	name:'cart',
    	component:cart
    }
  ]
})
