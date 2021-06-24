import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/startPage/HelloWorld'
import test1 from '@/pages/test/test1'
import Index from '../pages/devDetail/index'

import thirdDetail from '../pages/thirdDetail/index'
import loginCom from '../pages/loginCom/index'
// import thirdDetail1 from '../pages/thirdDetail/index1'


Vue.use(VueRouter)

export default new VueRouter({

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
            path: '/test1',
            component: test1
        },
        {
            path: '/thirdDetail',
            component: thirdDetail
        },
        {
            path: '/loginCom',
            component: loginCom
        },
        // {
        //     path: '/thirdDetail1',
        //     component: thirdDetail1
        // },
    ]
})