import home from './view/home.vue';
import Doc from './view/Doc.vue';
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
// @ts-ignore
import { h } from 'vue';
import Markdown from './components/Markdown.vue';

const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:'/doc/intro'},
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        {path:'switch',component:SwitchDemo},
        {path:'button',component:ButtonDemo},
        {path:'dialog',component:DialogDemo},
        {path:'tabs',component:TabsDemo},
      ]}
  ]
})
