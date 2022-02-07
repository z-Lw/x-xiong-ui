import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
// @ts-ignore
import  Wei from "./components/Wei.vue"
// @ts-ignore
import  Xxx from "./components/xxx.vue"
const router = createRouter({
  history: history,
  routes: [
    {path:'/',component: Wei},
    {path:'/xxx',component:Xxx}
  ]
})
const app =createApp(App)
app.use(router)
app.mount('#app')
