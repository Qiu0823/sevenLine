import {login} from '@/api/user.js'
export default {
    acSetRoute({commit},pay){
        commit('setAllRoute',pay)
    },
  async acSetUserInfo({commit},paylod){
     await  login(paylod).then(res=>{
            console.log(res)
            const {result,message,state} = res.data
            if(state == true){
                console.log(message,'token')
                commit('setUserInfo',result)
                // commit('setUserToken',message)
                sessionStorage.setItem('token',message)
            } else{
                return Promise.reject(message)
            }
        })
    },
    logout({commit}){
        commit('setUserInfo',{})
        sessionStorage.removeItem('token')
    },
    acSetCurrentNav({commit},paylod){
        commit('setCurrentNav',paylod)
    }
}