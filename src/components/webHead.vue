<!-- 网站header部分-->
<template>
    <div>
        <div class="top"></div>
        <div class="menu">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/allgoods">全部商品</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /**设置ul */
    ul{margin: 0px;padding: 0px;list-style-type: none;}
    /**设置顶部区域 */
    .top{width: 100%;height: 58px;background: #000;display: flex;align-items: center;}
    /**设置菜单栏 */
    .menu{width: 100%;height: 74px;background: #fff;}
    /**设置菜单栏下的ul li*/
    .menu ul{width:1180px;display: flex;margin: 0 auto;}
    .menu ul li{flex:1;text-align: center;line-height: 74px;}
</style>