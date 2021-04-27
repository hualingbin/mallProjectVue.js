<!-- 网站首页部分-->
<template>
    <div>
        <!--引入head组件 -->
        <webHead></webHead>
        <!-- 路由匹配到的组件将显示在这里,例如子路由页面 -->
        <router-view></router-view>
    </div>
</template>
<script>
//引入header.vue,省略.vue后缀名
import webHead from '../components/webHead'
export default {
  //组件容器
  components:{
    webHead
  }
}
</script>
<style scoped>

</style>
