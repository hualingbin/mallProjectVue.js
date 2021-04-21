<template>
  <div id="app">
    <!--引入head组件 -->
    <webHead></webHead>
    <!--页面动态显示区域-->
    <router-view/>
  </div>
</template>

<script>
//引入header.vue,省略.vue后缀名
import webHead from './components/webHead'
export default {
  name: 'App',
  components:{
    webHead
  }
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
