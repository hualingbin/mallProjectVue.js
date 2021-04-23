<template>
  <div>
    <!-- banner 部分-->
    <div class="banner">
      <!-- element-ui Carousel 走马灯,轮播图部分-->
      <el-carousel height="415px">
        <el-carousel-item v-for="(item,i) in allList" :key="i">
          <img :src="item.panelContents[0].productImageBig" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 广告部分-->
    <div v-for="(item,i) in allList" :key="i">
      <div class="ad" v-if="item.type == 1">
        <ul>
          <li v-for="(ad,i) in item.panelContents" :key="i">
            <img :src="ad.picUrl" alt=""/>
          </li>
        </ul>
      </div>
      <!-- 热门商品部分-->
      <div class="hotdetail" v-if="item.type == 2">
        <div class="hotdetail_menu">{{item.name}}</div>
        <div class="hotdetail_main">
          <ul>
            <li v-for="(hotDetail,i) in item.panelContents" :key="i">
              <img :src="hotDetail.picUrl" alt="" />
                {{hotDetail.productName}}
              <p>{{hotDetail.salePrice}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    
    <div class="hotdetail"></div>
  </div>
</template>
<script>
//加载模拟数据
import listData from '@/mock/list.json'; 
export default {
    //定义组件数据
    data(){
        return{
          //获得接口所有数据
          allList:[]
          
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
            //this.allList = listData.data.result;
            this.$axios.get('http://api.mm2018.com:8090/api/goods/home')
            .then(res=>{
              console.log(res.data.result);
              this.allList = res.data.result;
              
            }) 
           
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

.ad ul li img{
  width: 100%;
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