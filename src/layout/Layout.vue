<template>
    <el-container>
        <el-aside width="200px">
            <Sider />
        </el-aside>
        <el-container>
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

<style lang="less">
.el-aside {
  position: fixed;
  width: 20% !important;
}
</style>