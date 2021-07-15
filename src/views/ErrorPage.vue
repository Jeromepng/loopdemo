<template>
  <div class="error-msg">
    <h2>Sorry, this Page is currently under construction.</h2>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error-msg {
  width: 100%;
  height: 100vh;
}
.error-msg h2 {
  margin-top: 200px;
}
</style>
