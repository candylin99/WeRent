import Vue from 'vue'
import Router from 'vue-router'
import share from './views/Home.vue'
import index from './views/index/index.vue'
import rent from './views/Msite.vue'
import special from './views/special/index.vue'
import login from './views/login/index.vue'
import interview from './views/i/index.vue'
import my from './views/my/index.vue'
import sale from './views/sale/index.vue'
import selectview from './components/selectview/index.vue'
import gonglve from './views/gonglve/index.vue'
import dashboard from './views/dashboard/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/selectview',
      name: 'selectview',
      component: selectview
    },

    {
      path: '/special',
      name: 'special',
      component: special,
      meta:{
        name : "referrer",
        content:"no-referrer" }
    },

    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/select',
      name: 'selectview',
      component: selectview
    },
    {
      path:'/rent',
      name:'rent',
      component:rent,
    },
  
    {
    path: '/gonglve',
    name: 'gonglve',
    component: gonglve
    }, {
      path: '/sale', name: 'sale', component: sale
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }, 
    {
    
      path: '/i/:id',name: 'interview',component: interview
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
