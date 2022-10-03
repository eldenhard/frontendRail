<template>
  <div>
    <UpNavbar/>
    <!-- <Navbar/> -->
    <router-view/>
    <Authorization></Authorization>
  </div>
</template>

<script>
import UpNavbar from './components/UpNavbar.vue';
import Authorization from './components/Authorization.vue'

export default {
  name: 'App',
  components: {UpNavbar, Authorization}
}
</script>

<style>
@import './style/style.css';
</style>

