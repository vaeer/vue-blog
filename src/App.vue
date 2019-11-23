<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/layout/Layout';
export default {
  name: "app",
  components: {
      Layout
  }
};
</script>

<style lang="less">
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: #f5f5f7;
}
</style>
