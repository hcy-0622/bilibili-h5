import { RouteRecordRaw } from 'vue-router'

import Home from '../views/home/Home.vue'
import Channel from '../views/channel/Channel.vue'
import Demo from '../views/demo/Demo.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/channel/:id/:subId?',
    component: Channel,
  },
  {
    path: '/demo',
    component: Demo,
  },
]

export default routes
