<template>
	<el-menu class="el-menu-vertical-demo" router :default-active="$route.path">
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span>主页</span>
    </el-menu-item>
    <el-menu-item index="/autoreply">
      <i class="el-icon-document"></i>
      <span>个人信息</span>
    </el-menu-item>
    <el-menu-item index="/customMenu">
      <i class="el-icon-edit"></i>
      <span>考勤信息</span>
    </el-menu-item>
    <el-menu-item index="/qrcode">
      <i class="el-icon-information"></i>
      <span>通知</span>
    </el-menu-item>
  </el-menu>
</template>