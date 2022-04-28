import home from './view/home.vue';
import Doc from './view/Doc.vue';
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Intro from './view/Intro.vue';
import GetStarted from './view/GetStarted.vue'
import Install from './view/Install.vue'
export const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: home},

    {path:'/doc',component:Doc,children:[
        {path:'',component:DocDemo},
        { path: "intro", component: Intro },
        { path: "get-started", component: GetStarted },
        { path: "install", component: Install },
        {path:'switch',component:SwitchDemo},
        {path:'button',component:ButtonDemo},
        {path:'dialog',component:DialogDemo},
        {path:'tabs',component:TabsDemo},
      ]}
  ]
})
