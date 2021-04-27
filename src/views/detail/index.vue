<template>
    <div>
        <h1>详情页面</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodsId:''
        }
    },
    created(){
        //获取查询参数
        this.goodsId = this.$route.query.goodsId
        console.log(this.$route.query.goodsId)
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get('http//.....').then(res=>{
                //获得商品详细信息
            })
        }
    }
}
</script>
<style scoped>

</style>