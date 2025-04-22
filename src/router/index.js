import Vue from 'vue'
import VueRouter from 'vue-router'
import JDVue from "@/views/JDVue.vue";
import Nav from "@/views/components/Nav.vue";
import search from "@/views/components/Search.vue";
import Content from "@/views/components/Content.vue";
import ShopContent from "@/views/components/ShopContent.vue";
import Spring from "@/views/outing/Spring.vue";


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'JDVue',
    component:JDVue
  },
  {
    path:'/Nav',
    name:'Nav',
    component:Nav
  },
  {
    path: '/Search',
    name:'Search',
    component:search
  },
  {
    path: '/Content',
    name:'Content',
    component:Content
  },
  {
    path: '/ShopContent',
    name:'ShopContent',
    component: ShopContent
  },
  {
    path: '/Spring',
    name: 'Spring',
    component: Spring
  }

]

const router = new VueRouter({
  routes
})


export default router
