import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/startPage/copy'
import copy from '@/pages/startPage/HelloWorld'
import Index from '../pages/devDetail/index'
import store from '../store'

import thirdDetail from '../pages/thirdDetail/index'
import loginCom from '../pages/loginCom/index'
import PageHouse from '../pages/housePage/index'
// import carTestIndex from '@/components/carTestIndex'





Vue.use(VueRouter)

const router = new VueRouter({

    routes: [
        {
            path: '/',
            component: HelloWorld,
            meta: {
                title: '七号线'
            }
        },
        {
            path: '/index',
            component: Index,
            meta: {
                title: '文件上传',
                hasint: false
            }
        },
        {
            path: '/thirdDetail',
            component: thirdDetail
        },
        {
            path: '/loginCom',
            component: loginCom
        },
        {
            path: '/copy',
            component: copy
        },
        {
            path: '/pageHouse',
            component: PageHouse
        },
        // {
        //     path: '/car',
        //     component: carTestIndex
        // },
    ]
})
router.beforeEach((to,from,next)=>{
    store.state.WebsocketMessage = {}
    next()
})
export default router