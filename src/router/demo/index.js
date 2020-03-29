import Index from '../../Layout/index.vue'
import Child from '../../pages/Index/child.vue'
import Childtwo from '../../pages/Index/child2.vue'
import Childthree from '../../pages/Index/child3.vue'
import error from '../../pages/404/index.vue'

import {
  commodity
} from "./commodity";

export const powerRouter = [{
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/index/black',
    children: [{
      path: '/index/black',
      name: '首页',
      component: () => import('../../pages/home/index.vue'),
      meta: {
        title: '首页'
      }
    }]
  },
  ...commodity,

]

export const relaxRouter = [{
    path: '/404',
    name: '404',
    component: error,


  },
  {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404",
  }
]
