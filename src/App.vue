<template>

  <router-view/>
</template>

<script lang="ts">
  import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup: function () {
    const menuVisible = ref(false)
    provide ('xxx',menuVisible)
  }
}
</script>
