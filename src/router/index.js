import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['../components/Index'],resolve)
const PetIndex = resolve => require(['../components/petIndex/PetIndex'],resolve)
const AddPet = resolve => require(['../components/petIndex/AddPet'],resolve)
const PetDetail = resolve => require(['../components/petIndex/PetDetail'],resolve)

const PetOrder = resolve => require(['../components/petOrder/PetOrder'],resolve)

const PetMine = resolve => require(['../components/petMine/PetMine'],resolve)
const EditUser = resolve => require(['../components/petMine/EditUser'],resolve)
const MinePublish = resolve => require(['../components/petMine/MinePublish'],resolve)
const MineCollect = resolve => require(['../components/petMine/MineCollect'],resolve)
const MineInfo = resolve => require(['../components/petMine/MineInfo'],resolve)


const SignIn = resolve => require(['../components/sign/SignIn'],resolve)
const SignUp = resolve => require(['../components/sign/SignUp'],resolve)
const Protocol = resolve => require(['../components/sign/Protocol'],resolve)

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
      {name:'SignIn',path:'/signIn',component:SignIn},
      {name:'SignUp',path:'/signUp',component:SignUp},
      {name:'MinePublish',path:'/minePublish',component:MinePublish},
      {name:'MineCollect',path:'/mineCollect',component:MineCollect},
      {name:'Protocol',path:'/protocol',component:Protocol},
      {name:'EditUser',path:'/editUser',component:EditUser},
      {name:'AddPet',path:'/addPet',component:AddPet},
      {name:'PetDetail',path:'/petDetail/:petCode',component:PetDetail},
      {name:'MineInfo',path:'/mineInfo/:phone',component:MineInfo},
    	{path: '*', redirect: '/index/petIndex'}
  	]
})

export default router
