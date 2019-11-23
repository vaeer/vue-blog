<template>
  <div class="header">
    <div class="list">
      <div class="item">文章</div>
      <div class="item">新技术分享</div>
      <div class="item">关于</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scope lang="less">
.header {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #444;
  z-index: 99;
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    max-width: 980px;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
