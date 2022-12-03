import login from '../view/login.vue'
const routes = [
    { path: '/', component: login },
    { path: '/about', component: About },
  ]
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })