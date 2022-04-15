<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>UI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/"> GitHub</a>
                <router-link to="/doc" >开始</router-link>
            </p>
        </div>
    </div>

</template>

<script lang="ts">
  import TopNav from'../components/Topnav.vue'
  export default {
   components:{TopNav}
 }
</script>

<style lang="scss" scoped>
    .topNav{
        border:1px solid red;
    }
</style>
