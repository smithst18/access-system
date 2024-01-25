import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "Vista inicial Login"*/"@/views/LoginUser.vue"),
    },
    {
      path: "/",
      name:"home",
      //beforeEnter: [ isAuthGuard ],
      component: () => import(/* webpackChunkName: "Vista principal"*/"@/views/HomeView.vue"),
      //redirect: { name:"tickets" },
      redirect: { name:"dashboard" },
      children:[
        { path: "home", name:"dashboard", component:  () => import(/* webpackChunkName: "Vista principal"*/"@/views/DashBoard.vue"),},
        { path: "signin", name:"signin", component:  () => import(/* webpackChunkName: "Vista principal"*/"@/views/SignIn.vue"),},
        { path: "signin2", name:"otro", component:  () => import(/* webpackChunkName: "Vista principal"*/"@/views/DashBoard.vue"),},
       /*  { path: "mail", ...mailRoutes },
        { path: "gestion", ...managementRoutes },
        { path: "mail", ...chatRoutes }, */
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect:{ name:"login" }
    },
  ]
})

export default router
