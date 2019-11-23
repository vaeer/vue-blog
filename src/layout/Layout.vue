<template>
    <div>
        <Header class="header" />
        <Sider class="sider"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sider from '@/components/Sider.vue';
export default {
    name: 'layout',
    components: {
        Header,
        Sider
    }
}
</script>

<style lang="less">
</style>