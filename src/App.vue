<template>
  <div
    id="app"
    class="dark:bg-gray-800"
  >
    <div
      id="nav"
      class="p-4 font-bold"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    &:hover {
      @apply text-gray-500;
    }
    &.router-link-exact-active {
      @apply text-green-500;
    }
  }
}
</style>
