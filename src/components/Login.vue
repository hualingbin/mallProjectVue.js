<template>
    <div>
        <h1>登陆首页</h1>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                loginForm:{
                    username:'',
                    password:''
                },
                userToken:'',
                rules:{
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                let v=this;
                this.$axios({
                   
                }).then(function(res){
                  
                }).catch(function(err){
                   
                })
            }
        }
    }
</script>
<style scoped>

</style>>

</style>