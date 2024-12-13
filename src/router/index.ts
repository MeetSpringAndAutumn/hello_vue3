import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "../views/about.vue";
import News from "../views/news.vue";
import Detail from "@/views/detail.vue";

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/news',
            component: News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        }
    ]
})
export default router