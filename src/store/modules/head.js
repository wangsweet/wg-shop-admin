const head={
            state:{
                isCollapse:false,
                crumbList:null,
            },
            mutations:{
                SETCOLLAPSE(state){
                    state.isCollapse=!state.isCollapse
                },
                setCrumbList(state,data){
                    state.crumbList=data
                }
            },
            actions:{
                changeisCollapse({commit}){
                    commit("SETCOLLAPSE")
                }
            }
}

export default head