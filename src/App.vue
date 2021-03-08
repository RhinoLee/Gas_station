<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="./">
          <h1 class="logo">Gas Station</h1>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link :class="{ 'has-text-primary': isMapMode }"  to="/" class="navbar-item is-size-3">Map</router-link>
          <router-link :class="{ 'has-text-primary': !isMapMode }" to="/list" class="navbar-item is-size-3">List</router-link>
        </div>

      </div>
    </nav>
  </div>
  <router-view/>
</template>

<script>
export default {

  computed: {
    isMapMode(){
      return this.$store.state.isMapMode 
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1.logo {
  margin-right: 10px;
  font-size: 36px;
}

// .navbar-start {
//   a.active {
//     color: red
//   }
// }
</style>
