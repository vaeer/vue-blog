<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import layout from '@/layout/layout';
export default {
  name: 'app',
  components: {
      layout
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
    color: #444;
    background-color: #f4f5f5;
}
</style>
