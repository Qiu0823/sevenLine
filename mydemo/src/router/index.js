import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/startPage/HelloWorld'
import test1 from '@/pages/test/test1'
// import Index from '@/pages/index'
import Index from '../pages/devDetail/index'
import index from '../pages/reasonConfig/index'
// import carTest from '@/components/carTest'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/',
        component:HelloWorld,
        meta:{
            title:'七号线'
        }
    },
    {
        path:'/index',
        component:Index,
				meta:{
					title: '文件上传',
					hasint:false
				}
    },
		{
			path:'/test1',
			component:test1
		},
		{
			path:'/reasonConfig',
			component:index
		},
		
    // {
    //     path:'/rollCar',
    //     component:carTest
    // },
]
})