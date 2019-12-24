<template>
  <div @click="onClick" :style="{backgroundColor: color}" class="single-label">
    <span class="label-title">{{ content.title }}</span>
    <span class="label-number">({{ content.number }})</span>
  </div>
</template>

<script>
export default {
  name: 'single-label',
  props: {
    content: Object,
    color: String,
    onClick: Function
  }
}
</script>

<style lang="less" scoped>
  .single-label {
    display: inline-block;
    font-size: 14px;
    text-align: center;
    border-radius: 6px;
    padding: 4px 6px;
    margin: 8px;
    cursor: pointer;
    .label-title {
      margin-right: 4px;
    }
    .label-number {
      
    }
  }
</style>