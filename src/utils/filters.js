import store from '../store'
//权限过滤
export function newArrruter(routes, role) {
    const res = []
    routes.forEach(route => {
      const tmp = { ...route }
      if(tmp.meta&&tmp.meta.role){
        if (tmp.meta.role.indexOf(role)!==-1) {
          if (tmp.children) {
            tmp.children = newArrruter(tmp.children, role)
          }
          res.push(tmp)
        }
      }else{
        if(tmp.children) {
          tmp.children = newArrruter(tmp.children, role)
        }
        res.push(tmp)
      }

     })
     return res
  }

  export function Setmenu(newrouter) {
    let arr=JSON.parse(JSON.stringify(newrouter))
    let arr2=arr.map((res)=>{

            return res.children[0]
    })
    arr2=filtermene(arr2)
    
    return arr2
  }
   //过滤  hidden:true  不显示在menu上的路由
  function filtermene(menu){
    const arr=[]
    menu.forEach((res)=>{
       if(res&&!res.hidden){
         console.log('隐藏', res)
            if(res.children){
              res.children=filtermene(res.children)
            }
            arr.push(res)
       }
    })
    console.log(111,arr)
    return arr
  }


  // vue移动端适配
  // 1.安装： npm install px2rem-loader lib-flexible --save
  // 2在入口文件main.js中引入lib-flexible：  import "lib-flexible/flexible.js"
  // 3在build文件夹下的utils.js中,找到cssLoaders方法，在所示图片红色框框的位置添加红框内的代码即可。

  // exports.cssLoaders = function (options) {
  //   options = options || {}
  
  //   const cssLoader = {
  //     loader: 'css-loader',
  //     options: {
  //       sourceMap: options.sourceMap
  //     }
  //   }
  //   const px2remLoader = {
  //     loader: 'px2rem-loader',
  //         options: {
  //             remUint: 75
  //        }
  // }
  //   const postcssLoader = {
  //     loader: 'postcss-loader',
  //     options: {
  //       sourceMap: options.sourceMap
  //     }
  //   }
  //  最后 .去除index.html中mate标签(一定要注销) 配置适配各种机型