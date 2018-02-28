<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: 'fz';
    src:url('./assets/font/font.ttf');
  }
  @font-face {
    font-family: 'fzc';
    src:url('./assets/font/font2.ttf');
  }
  *{
    margin:0;
    padding:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  html,body{
    width: 100%;
    background:#fff;
  }
#app {
  width: 100%;
  background:#fff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
