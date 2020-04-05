<template>
  <div id="app">
      <!-- <ul class="ul">
        <router-link to="/cont" tag="li" class="li">宠物</router-link>
        <router-link to="/pet" tag="li" class="li">宠物详情</router-link>
      </ul> -->
    <router-view/>
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
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.ul{position: absolute;top: 0; color: rgb(82, 72, 60); background-color: rgb(158, 126, 86); height: 30px; width: 50%; margin: 0;padding: 0;list-style: none;display: flex; justify-content: space-between;}
.ul .li{cursor: pointer;text-align: center; height: 30px;font-size: 15px; line-height: 30px; font-weight: bold;}
</style>
