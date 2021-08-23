import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/startPage/copy'
import copy from '@/pages/startPage/HelloWorld'
import Index from '../pages/devDetail/index'
import store from '../store'

import thirdDetail from '../pages/thirdDetail/index'
import loginCom from '../pages/loginCom/index'
import PageHouse from '../pages/housePage/index'
import menu from '../pages/menu/index'
import devTruss from '@/pages/devTruss/index'
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
            path: '/devTruss',
            component: devTruss
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
            path: '/menu',
            component: menu,
            children:[
                {
                    path:'/bugInfo',
                    component: ()=>import('../pages/menu/component/BugInfo.vue'),
                    meta:{
                        title:'故障信息'
                    }
                },
                {
                    path:'/userList',
                    component: ()=>import('../pages/menu/component/UserTable.vue'),
                    meta:{
                        title:'用户列表'
                    }
                },
                {
                    path:'/changePas',
                    component: ()=>import('../pages/menu/component/ChangePas.vue'),
                    meta:{
                        title:'修改密码'
                    }
                },
                {
                    path:'/addNew',
                    component: ()=>import('../pages/menu/component/AddNew.vue'),
                    meta:{
                        title:'注册新用户'
                    }
                },
                {
                    path:'/testM',
                    component: ()=>import('../pages/menu/component/testM.vue'),
                },
            ]
        },
        {
            path: '/pageHouse',
            component: PageHouse
        },
    ]
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const AsyncRoute = {
    path: '/PageHouse',
    component: PageHouse
}
let isAdd = false
router.beforeEach((to, from, next) => {
    console.log(router)
    store.state.WebsocketMessage = {}
    next()
    // if(to.path == '/'){
    //     next()
    // } else {
    //     if (!isAdd) {
    //             const temp = router.options.routes = [...router.options.routes, AsyncRoute]
    //             console.log(store)
    //             store.dispatch('acSetRoute', temp).then(() => {
    //                 router.addRoute(AsyncRoute);
    //                 isAdd = true;
    //                 sessionStorage.setItem('allRoutes',JSON.stringify(temp))
    //                 next(to)
    //             })
    //     } 
    //     next()
    // }
 
})
export default router