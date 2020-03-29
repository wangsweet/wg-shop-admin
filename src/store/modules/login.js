import { server } from '../../utils/http.js'
import { Message } from 'element-ui'
import {Setmenu} from "../../utils/filters"

import {resetRouter} from "../../router"


const login = {
    state: {
        token: sessionStorage.getItem("token"), //权限
        username: sessionStorage.getItem("username"),
        role: sessionStorage.getItem("role"),
        newrouter: [],
        menu:[],
        currentMenu:''

    },

    mutations: {
        SETTOKEN(state, data) { //  存token
            state.token = data
        },
        SETROLE(state, data) {//  存权限A , B
            state.role = data
        },
        SETNEWROUTER(state, data) {
            state.newrouter = data
        },
        SETMENU(state,data){  //设置左侧menu
                state.menu=data
        },
        LOGINOUT(state,data){
            state.token='';
            state.role='';
            state.newrouter=[]
            state.currentMenu=[]
        },
        SET_CURRENT_MENU(state,data){
            state.currentMenu=data;
        }

    },
    actions: {
        Login({ commit }, data) {
            return new Promise((resolve, reject) => {
                server.login({ username: data.username, password: data.username }).then((res) => {

                    if (res.status == '1') {
                        console.log(res)
                        commit('SETTOKEN', res.user.token)  //  存token
                        sessionStorage.token = res.user.token //  存token
                        commit('SETROLE', res.user.role) //  存权限A , B
                        sessionStorage.role = res.user.role // //  存权限A , B
                        resolve()
                    } else if (res.status == '0') {

                        Message({
                            showClose: true,
                            message: res.msg,
                            type: 'error'
                        })
                    }

                }).catch((e) => {
                    console.log(e)
                })


            }
            )
                .catch((e) => {
                    reject(e)
                })
        },
        
        Role({ commit }, data) {
            return new Promise((resolve, reject) => {
                    commit('SETNEWROUTER',data)//权限路由
                    let arr=Setmenu(data)//设置左侧menu过滤
                    commit('SETMENU',arr)//设置左侧menu
                    resolve(data)
            })
                .catch((e) => {
                    console.log(e)
                })
        },
        Loginout({commit}){
            return new Promise((resolve,reject)=>{
                commit("LOGINOUT")//登出
                sessionStorage.token='';
                sessionStorage.role='';
                commit("SET_CURRENT_MENU",'')
                resetRouter()
                resolve()
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    },
    
}


export default login