// router/index
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = 
[  
 {    
    path: '/',
    name: 'Home',
    component: import('/@views/Home')
 }, 
 {    
    path: '/user',
    name: 'User',
    component: () => import('/@views/User')
 }
]
const router = createRouter({  
    history: createWebHistory(process.env.BASE_URL), 
    routes
})
export default router