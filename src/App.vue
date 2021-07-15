<template>
  <div class="container">
    <Header />
    <router-view to="/"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background: $main-bg;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}
</style>
