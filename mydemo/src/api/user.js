import axios from 'axios'
import store from '@/store/index.js'

 const request = axios.create({
	baseURL: _USER_URL
})
request.interceptors.request.use(
    config => {
        if(config.url.includes('login')){
            return config;
        }
        var token = sessionStorage.getItem('token')
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            // config.headers.Authorization = `token ${store.state.userToken}`;
            config.headers.token = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
export function login(data){
    return request({
        url:'user/login',
        method:'get',
        params:data
    })
}

//http://localhost:8184/user/query/all/user
export function getAllUser(){
    return request({
        url:'user/query/all/user',
        method:'get'
    })
}
//删除用户
export function deleteUser(data){
    return request({
        url:'user/update/delete',
        method:'post',
        params:data
    })
}

//修改用户权限
//http://localhost:8184/user/update/auth?userId=4&auth=2
export function changeUserRole(data){
    return request({
        url:'user/update/auth',
        method:'post',
        params:data
    })
}
//设置页面导航栏
//http://localhost:8184/user/set/bar
export function showSideItem(){
    return request({
        url:'user/set/bar',
        method:'get',
    })
}

//新增用户
//http://localhost:8184/user/register?username=hzx01&auth=1
export function addNew(data){
    return request({
        url:'user/register',
        method:'post',
        params:data,
    })
}