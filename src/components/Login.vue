<template>
    <div class="signin-form">
        <h3 class="sign-title">ticket-sys 登录</h3>
        <div>
            <el-form :model="loginForm" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input
                            v-model="loginForm.username"
                            autocomplete="off"
                            placeholder="用户名"
                            prefix-icon="el-icon-user-solid"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            type="password"
                            v-model="loginForm.password"
                            autocomplete="off"
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" id="login-btn">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    //import api from '../constant/api';
    import {mapMutations} from "vuex";

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
            ...mapMutations(['changeLogin']),
            submitForm() {
                let v=this;
                this.$axios({
                    method: 'post',
                    url: api.base_url+'/user/login',
                    data:{
                        'username':v.loginForm.username,
                        'password':v.loginForm.password
                    }
                }).then(function(res){
                    console.log(res.data);
                    v.userToken = 'Bearer ' + res.data.token;
                    // 将用户token保存到vuex中
                    v.changeLogin({ Authorization:v.userToken });
                    v.$router.push('/home');
                    v.$message('登录成功');
                }).catch(function(err){
                    console.log("err",err);
                    v.$message('密码或用户名错误');
                })
            }
        }
    }
</script>