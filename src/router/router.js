import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "@/App";
import index from "../views/index"

const routes = [

    {
        path:'/',
        redirect:'/index',
        component: App,
        meta:{
           title: '首页'
        },
    },
    {
        path: '/index',
        component: index
    },
]

export default routes