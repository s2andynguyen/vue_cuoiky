<template>
  <Header />
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  /* --primary-color: #FF8717; */
  --primary-color: #be1e2d;
  --text-color: #313131;
  --white-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
