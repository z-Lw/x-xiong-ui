<template>
    <div>
        <div>Dialog 示例</div>
        <h2>示例1</h2>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <div>hi</div>
            </template>
            <template v-slot:title>
                <strong>标题</strong>
            </template>
        </Dialog>
        <h2>示例2</h2>
        <Button @click="showDialog">toggle</Button>
    </div>

</template>

<script lang="ts">
    import {ref} from 'vue'
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import { openDialog } from '../lib/openDialog';
export default {
  components:{Dialog,Button},
  setup(){
    const x= ref(false)
    const toggle =()=>{
      x.value =!x.value
    }
    const f1=()=>{
        console.log(1)
    }
    const f2=()=>{
      console.log(2)
    }
      const showDialog=()=>{
        openDialog({
          title:'提示',
          content:'你好',
          ok(){
            console.log('ok')
          },
          cancel(){
            console.log('cancel')
          }
        })
      }
    return {x,toggle,f1,f2,showDialog}
    }
}



</script>

<style lang="scss" scoped>

</style>
