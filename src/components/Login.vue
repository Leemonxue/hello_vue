<template>
	<div class="login">
        <div class="login-top">
            <h2>学生考勤管理系统</h2>
            <p>请输入用户名和密码</p>
        </div>

        <div class="login-content">
            <el-form label-width="65px" class="demo-ruleForm">
                <el-form-item label="用户名">
                    <el-input type="text" id="login-name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" id="login-password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item  class="btn-box">
                    <el-button type="primary" class="btn" @click="login">登录</el-button>
                    <el-button type="primary" class="btn" @click="login">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
</script>

<style>
.login{
    width:350px;
    height: auto;
    margin: 12% auto;
}
.login-top{
    color:#1D8CE0;
    text-align: center;
    margin-bottom: 30px
}
.login-top h2{
    font-size: 32px;
    margin-bottom: 10px;
}
.login-top p{
    color:#20A0FF;
    font-size: 14px
}
.login-content{
    margin-left: -30px
}
.btn-box{
    width: 380px;
    margin-left: -10px;
}
.btn{
    width: 80px;
    margin-top: 20px
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>