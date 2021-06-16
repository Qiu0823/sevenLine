import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/startPage/HelloWorld'
import Datail from '@/pages/detail'
import test1 from '@/pages/test/test1'
// import Index from '@/pages/index'
import Index from '../pages/devDetail/index'
// import carTest from '@/components/carTest'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/',
        component:HelloWorld,
        meta:{
            title:'七号线'
        }
    },{
        path:'/detail',
        component:Datail
    },
    {
        path:'/index',
        component:Index
    },
<<<<<<< HEAD
    {
        path:'/rollCar',
        component:RollCar
    },
		{
			path:'/test1',
			component:test1
		}
=======
    // {
    //     path:'/rollCar',
    //     component:carTest
    // },
>>>>>>> cqy1
]
})