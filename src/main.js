import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/base.css'
/*练习点击路由问题*/
const originalPush = router.push
router.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
