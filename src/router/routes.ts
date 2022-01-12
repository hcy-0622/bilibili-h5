import { RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
import HomeDefault from '../views/home/default/HomeDefault.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: HomeDefault,
      },
      {
        path: 'channel/:id/:subId?',
        component: import('../views/home/channel/HomeChannel.vue'),
      },
    ],
  },
  {
    path: '/search',
    component: () => import('../views/search/Search.vue'),
    props: (route) => ({ keyword: route.query.keyword }),
  },
  {
    path: '/demo',
    component: () => import('../views/demo/Demo.vue'),
  },
]

export default routes
