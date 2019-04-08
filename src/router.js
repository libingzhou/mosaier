import Vue from 'vue'
import Router from 'vue-router'
import Botton from './views/botton.vue'
import Section from './views/section.vue'
import Mj from './components/mj.vue'
import Thk from './components/thk.vue'
import Ls from './components/ls.vue'
import Dl from './components/dl.vue'
import Zc from './components/zc.vue'
import Fx from './components/fx.vue'
import Gwc from './components/gwc.vue'
import Xq from './components/xq.vue'
import Ss from './components/ss.vue'
import Loading from './components/loading.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Section
    },
    {
      path:'/loading',
      component: Loading
    },
    // {
    //   path: '/',
    //   redirect:'/section',
    // },
    {
      path:'/mj',
      component:Mj
    },
    {
      path:'/thk',
      component:Thk
    },
    {
      path:'/ls',
      component:Ls,
    },
    {
      path:'/ls/:mz',
      component:Ls,
    },

    {
      path:'/dl',
      component:Dl
    },
    {
      path:'/zc',
      component:Zc
    },
    {
      path:'/fx',
      component:Fx
    },
    {
      path:'/gwc',
      component:Gwc
    },
    {
      path:'/ss',
      component:Ss
    },
    {
      name:'xq',
      path:'/xq/:bid',
      component:Xq,
    },
  ]
})
