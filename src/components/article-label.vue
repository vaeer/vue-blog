<template>
  <div class="article-label">
    <span>标签</span>
    <div class="label-container">
      <single-label
        v-for='(item, index) of labels'
        :key='index'
        :content='item'
        :color='labelColors[0]'
        :onClick="selectLabel"
      />
    </div>
  </div>
</template>

<script>
import singleLabel from '@/components/single-label';
import labelColors from '../config/color';
export default {
  name: 'aricle-label',
  props: {
    labels: Array
  },
  data() {
    return {
      labelColors
    };
  },
  components: {
    'single-label': singleLabel
  },
  methods: {
    selectLabel() {
      // 跳转
      console.log('.....');
    }
  }
}
</script>

<style lang="less" scoped>
.article-label {
  padding: 20px;
  margin-left: 20px;
  border-radius: 6px;
  background-color: #fff;
  .label-container {
    margin-top: 20px;
    color: #fff;
  }
}
</style>