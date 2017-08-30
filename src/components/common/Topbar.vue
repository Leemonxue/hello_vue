<template>
    <div>
        <el-menu default-active="/" router class="el-menu-demo" mode="horizontal" theme="dark">
            <el-menu-item index="/">学生考勤管理系统</el-menu-item>
            <el-dropdown class="menu-right">
                <el-button type="primary">
                    user name
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" class="dropdown">
                    <el-dropdown-item class="exit">
                        退出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>
<script type="text/javascript">
    export default {
        name:"topbar",
    }
</script>
<style type="text/css">
    .menu-right{
        float: right;
        margin: 12px 30px 0 0;
    }
    .dropdown{
        font-size: 12px;
    }
    .dropdown li{
        height:25px;
        line-height:25px;
        width:100px;
    }
</style>
