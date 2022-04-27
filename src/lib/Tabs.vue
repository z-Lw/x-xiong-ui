<template>
        <div class="gulu-tabs">
            <div class="gulu-tabs-nav" ref="container">
                <div class="gulu-tabs-nav-item" :ref="el=>{if(el)NavItems[index] = el}" :class="{selected: t===selected}" v-for="(t,index) in titles" :key="index"@click="select(t)">{{t}}</div>
                <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
            </div>
            <div class="gulu-tabs-content">
                <component class="gulu-tabs-content-item"
                           v-for="(c,index) in defaults" :is="c" :key="index"
                            :class="{selected: c.props.title ===selected}"
                />
         </div>
    </div>

</template>

<script lang="ts">
import Tab from './Tab.vue'
import {ref,onMounted , onUpdated} from 'vue'
    export default {
  props:{
    selected:{
      type :String
    }
  },
    components:{Tab},
    setup(props,context){
      const NavItems= ref<HTMLDivElement>([])
      const indicator = ref<HTMLDivElement> (null)
      const container = ref <HTMLDivElement>(null)
      onMounted(()=>{
        const divs =NavItems.value
        const result = divs.filter(div=>div.classList.contains('selected'))[0]
        const {width}=result.getBoundingClientRect()
        indicator.value.style.width =width+'px'
        const {left:left1} =container.value.getBoundingClientRect()
        const {left:left2} = result.getBoundingClientRect()
        const  left =left2-left1
        indicator.value.style.left=left+'px'
      })
      onUpdated(()=>{
        const divs =NavItems.value
        const result = divs.filter(div=>div.classList.contains('selected'))[0]
        const {width}=result.getBoundingClientRect()
        indicator.value.style.width =width+'px'
        const {left:left1} =container.value.getBoundingClientRect()
        const {left:left2} = result.getBoundingClientRect()
        const  left =left2-left1
        indicator.value.style.left=left+'px'
      })
      const defaults = context.slots.default()
      defaults.forEach((tag)=>{
        if(tag.type!==Tab){
          throw new Error('Tabs子标签必须是Tab')
        }
      })
      const titles = defaults.map((tag)=>{
        return tag.props.title
      })
      const select=(tag)=>{
            context.emit('update:selected',tag)

      }
      return {
        defaults,titles,select,NavItems,indicator,container
      }

    }
    }
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;
            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                transition: all 250ms;
            }
        }
        &-content {
            padding: 8px 0;
            &-item {
                display: none;
                &.selected {
                    display: block;
                }
            }
        }
    }
</style>
