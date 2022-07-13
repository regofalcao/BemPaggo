<template>
  <div id="app ">
    <div class="content m-auto">
      <Checkout msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import Checkout from './components/Checkout.vue'

export default {
  name: 'App',
  components: {
    Checkout
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@650;900&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  max-width: 480px;
  border: 1px solid #ccc;
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
}
</style>
