import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Basics from '../views/Basics.vue'
import Advanced from '../views/Advanced.vue'
import ViewBlogEntry from '../views/ViewBlogEntry.vue'

const routes: RouteRecordRaw[] = [
    {path: '/', component: Basics, name: 'Basics'},
    {path: '/blog', component: Advanced, name: 'Advanced'},
    {path: '/entries/:id', component: ViewBlogEntry, name: 'ViewBlogEntry'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router