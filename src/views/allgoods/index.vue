<template>
    <div>
        <div class="topheader">
            <ul>
                <li :class="{active:isActive == 1}" @click="selectBtn(1)">综合排序</li>
                <li :class="{active:isActive == 2}" @click="selectBtn(2)">价格由低到高</li>
                <li :class="{active:isActive == 3}" @click="selectBtn(3)">价格由高到低</li>
                <li><input type="text" v-model="minVal"></li>
                <li>-</li>
                <li><input type="text" v-model="maxVal"></li>
                <li><input type="button" value="确认" @click="queryData"></li>
            </ul>
        </div>
        <div class="allgoods">
            <ul>
                <li v-for="(item,i) in allData" :key="i">
                    <!--<img :src="" alt=""/> -- > -->
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
//加载模拟数据
import listData from '@/mock/list.json'; 
export default {
    data(){
        return{
            allData:[],//商品数据集合
            isActive:1,//class属性生效参数
            sort:'',//查询排序参数
            minVal:'',//查询最小值
            maxVal:''//查询最大值
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.allData = listData.data.result;
            /**this.$axios.get()//http://api.mm2018.com.8090/api/goods/allGoods?page=1&size=8&sort=${this.sort}&priceGt=${this.minVal}&priceLte=${this.maxVal}
            .then(res=>{
                console.log(res)
                this.allData = listData.data.result;
            })*/
        },
        selectBtn(id){
            this.isActive = id;
            if(id == 1){
                this.sort = ''
                this.getData()
            }
            if(id == 2){
                this.sort = '1'
                this.getData()
            }
            if(id == 3){
                this.sort = '-1'
                this.getData()
            }
        },
        queryData(){
            if(this.maxVal > this.minVal){
                this.getData();
            }
        }
    }
}
</script>
<style scoped>
.active{color: blue}
.topheader{width: 1180px;margin: 0 auto;}
/**去掉ul默认样式 */
ul{margin: 0px;padding: 0px;list-style-type: none;}
.topheader ul{width: 100%;display: flex;justify-content: space-between;}
.topheader ul li{line-height: 60px;}

/**全部商品样式 */
.allgoods{width: 1180px;margin: 0 auto;background: #fff;border-radius: 10px;overflow: hidden;}
.allgoods ul{width: 100px;display: flex;justify-content: space-between;flex-flow: wrap;}
.allgoods ul li {width: 25%;text-align: center;}
.allgoods ul li img{width: 150px;display: block;margin: 0 auto;}
.allgoods ul li p{color: red;}
</style>