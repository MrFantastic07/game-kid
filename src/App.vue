<template>
  <div class="flex justify-center h-48 border-b-2 ">
    <div>
      <img 
      src="./assets/Logo-banner1.png"
      alt="logo-api"
      width="400">
    </div>
  </div>
  <RouterView />
  
</template>

<script>


export default {

}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
