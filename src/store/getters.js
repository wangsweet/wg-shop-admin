const getters={
    username:state=>state.login.username,
    role:state=>state.login.role,
    newrouter:state=>state.login.newrouter,
    token:state=>state.login.token,
    isCollapse:state=>state.head.isCollapse,
    menu:state=>state.login.menu,
    currentMenu:state=>state.login.currentMenu,
    crumbList:state=>state.head.crumbList
}

export default getters