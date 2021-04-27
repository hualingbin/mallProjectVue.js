<template>
  <div id="app">
    <!--页面动态显示区域,路由匹配到的组件将显示在这里-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
  /**设置页面背景色 */
  body{background: #ededed;}
  /**设置外边距和内边距 */
  *{margin: 0%;padding: 0%;}
  /**设置ul */
  ul{margin: 0px;padding: 0px;list-style-type: none;}
</style>
