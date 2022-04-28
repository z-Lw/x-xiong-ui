<template>
    <div class="topNav">
        <div class="logo" >
            <router-link to="/">
                <svg class="icon">
                    <use xlink:href="#icon-home"></use>
                </svg>
            </router-link>
        </div>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
<!--        <span class="toggleAside" @click="toggleMenu"></span>-->
    </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'
 export default {
    setup(){
      const menuVisible = inject<Ref<boolean>>('menuVisible')
      const toggleMenu = ()=>{
        menuVisible.value = !menuVisible.value
      }
      return {toggleMenu}
    }

 }

</script>

<style lang="scss" scoped>
    .topNav{
        background: #fff;
        display: flex;
        padding: 16px;
        position: fixed;
        border-bottom: 1px solid #eaecef;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;

        >.logo{
            max-width: 6em;
            margin-right: auto;
            *> svg {
                width: 32px;
                height: 32px;
            }
        }
        >.menu{
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }

        }
        >.toggleAside{
            display: none;
            width: 24px;
            height: 24px;
            background: red;
            position: absolute;
            left: 16px;
            top:50%;
            transform: translateY(-50%);
        }
        @media (max-width:500px) {
            > .menu{display: none;}
            > .toggleAside{display: inline-block;}
        }
        *> a:hover{
            text-decoration: none;
        }
    }

</style>
