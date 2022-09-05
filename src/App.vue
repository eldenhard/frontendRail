<template>
<div>
    <UpNavbar/>
    <!-- <Navbar/> -->
    <router-view/>

  
</div>
</template>

<script>
import UpNavbar from './components/UpNavbar.vue';
// import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {UpNavbar}
}
</script>


<style>
@import './style/style.css';

div{
  min-width: 100%;
  margin: 0 !important;
}
</style>

