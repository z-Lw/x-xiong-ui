import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
import home from './view/home.vue';
import './index.scss';
import Doc from './view/Doc.vue';
const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: home},
    {path:'/doc',component:Doc}
  ]
})
const app =createApp(App)
app.use(router)
app.mount('#app')
