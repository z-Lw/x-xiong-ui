import home from './view/home.vue';
import Doc from './view/Doc.vue';
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
import SwitchDemo from './components/SwitchDemo.vue';

export const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: home},
    {path:'/doc',component:Doc,children:[
        {path:'switch',component:SwitchDemo},
      ]}
  ]
})
