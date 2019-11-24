<template>
    <el-container>
        <el-aside width="200px">
            <sider />
        </el-aside>
        <el-container class="content">
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sider from '@/components/Sider';
export default {
    name: 'layout',
    components: {
        Sider
    }
}
</script>

<style scope lang="less">
.el-aside {
  position: fixed;
  width: 20% !important;
}
.content {
  margin-left: 20%;
}
</style>