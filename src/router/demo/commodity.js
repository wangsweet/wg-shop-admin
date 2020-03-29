
import Index from '../../Layout/index.vue'

const obj={
      template:" <div><keep-alive><router-view></router-view></keep-alive></div>"
}
export  const commodity=[
    {
      path: '/index',
      name: '1',
      component: Index,
      children: [{
        path: '/index/Commoditymanage',
        component: obj,
        name: '商品',
        meta:{
          title:'商品',
          role: ['B']
        },
        children:[
            {
              path: '/index/Commoditymanage',
              name: '商品管理',
              component: () => import('../../pages/Commodity/goods-manage/index.vue'),
              meta:{
                title:'商品管理',
                role: ['B']
              },
            },
            {
              hidden: true,
              path: '/index/Commoditymanage/add',
              name: '新增商品',
              component: () => import('../../pages/Commodity/goods-manage/add'),
              meta:{
                hidden: true,
                title:'新增商品',
                role: ['B']
              },
            },
            {
              hidden: true,
              path: '/index/Commoditymanage/detail/:id',
              name: '商品详情',
              component: () => import('../../pages/Commodity/goods-manage/add/index.vue'),
              meta:{
                title:'商品详情',
                role: ['B']
              },
            }
        ]
      }]
    },
    {
      path: '/index',
      name: '1',
      component: Index,
      children: [{
        path: '/index/shop-manage',
        component: obj,
        name: '商家',
        meta:{
          title:'商家',
          role: ['B']
        },
        children:[
            {
              path: '/index/shop-manage',
              name: '商家管理',
              component: () => import('../../pages/Commodity/shop-manage/index.vue'),
              meta:{
                title:'商品管理',
                role: ['B']
              },
            },
            {
              hidden: true,
              path: '/index/shop-manage/add',
              name: '新增商家',
              component: () => import('../../pages/Commodity/shop-manage/add'),
              meta:{
                hidden: true,
                title:'新增商家',
                role: ['B']
              },
            },
            {
              hidden: true,
              path: '/index/shop-manage/detail/:id',
              name: '商品详情',
              component: () => import('../../pages/Commodity/shop-manage/add/index.vue'),
              meta:{
                title:'商品详情',
                role: ['B']
              },
            }
        ]
      }]
    }
]