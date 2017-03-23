import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['../components/Index'],resolve)
const PetIndex = resolve => require(['../components/petIndex/PetIndex'],resolve)

const PetOrder = resolve => require(['../components/petOrder/PetOrder'],resolve)

const PetMine = resolve => require(['../components/petMine/PetMine'],resolve)

const scrollBehavior = (to, from, savedPosition) => {
  	if (savedPosition) {
    	// savedPosition is only available for popstate navigations.
    	return savedPosition
  	} else {
    	const position = {}
    	// new navigation.
   	 	// scroll to anchor by returning the selector
    if (to.hash) {
      	position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      	// cords will be used if no selector is provided,
      	// or if the selector didn't match any element.
      	position.x = 0
      	position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
 }

const router = new Router({
	mode:'history',
	scrollBehavior,
  	routes: [
    	{name:'Index',path:'/index',component:Index,children:[
    		{name:'PetIndex',path:'petIndex',component:PetIndex},
        {name:'PetOrder',path:'petOrder',component:PetOrder},
        {name:'PetMine',path:'petMine',component:PetMine}
    	]},
    	{path: '*', redirect: '/index/petIndex'}
  	]
})

export default router
