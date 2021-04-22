<template>
  <div>
    <!-- banner 部分-->
    <div class="banner">
      <!-- element-ui Carousel 走马灯,轮播图部分-->
      <el-carousel height="415px">
        <el-carousel-item v-for="(item,i) in lunbo" :key="i">
          <h3 class="small">{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 广告部分-->
    <div class="ad"></div>
    <!-- 热门商品部分-->
    <div class="hotdetail">
      <div class="hotdetail_menu">热门商品</div>
      <div class="hotdetail_main">
        <ul>
          <li>
            <img src="@/images/1.jpg" alt="" />
            商品介绍1
            <p>$1</p>
          </li>
          <li>
            <img src="@/images/1.jpg" alt="" />
            商品介绍2
            <p>$1</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="hotdetail"></div>
  </div>
</template>
<script>
//加载模拟数据
const listData = require('@/mock/list.json'); 
export default {
    //定义组件数据
    data(){
        return{
            //轮播数据
            lunbo:[]
        }
    },
    //vue生命周期函数,实例被创建之后被调用
    created(){
        this.getData();
    },
    //定义组件方法
    methods:{
        getData(){
            //模拟数据设置
            this.lunbo = listData.data.result;
            /*this.$axios.get('http://...')
            .then(res=>{
                console.log(res);
                this.lunbo = listData.data.result;
            })*/
           
        }
    }
};
</script>
<style scoped>
/**banner 部分 */
.banner {
  width: 1180px;
  height: 415px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
}

/** 广告部分*/
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
.ad {
  width: 1180px;
  height: 180px;
  margin: 20px auto;
  background: #000;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.ad ul {
  width: 100%;
  display: flex;
}
.ad ul li {
  flex: 1;
}

/** 热门商品部分*/
.hotdetail {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
}
.hotdetail_menu {
  height: 51px;
  border-bottom: 1px solid #ccc;
  line-height: 51px;
  text-indent: 30px;
}
.hotdetail_main {
  width: 100px;
}
.hotdetail_main ul {
  display: flex;
}
.hotdetail_main ul li {
  flex: 1;
  text-align: center;
}
.hotdetail_main ul li p {
  color: red;
}
.hotdetail_main ul li img {
  display: block;
  width: 170px;
  margin: 30px auto;
}
</style>