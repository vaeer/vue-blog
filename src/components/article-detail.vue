<template>
  <div class="article-detail">
    <div class="article-title">
      {{title}}
    </div>
    <div class="article-date">
      {{date}}
    </div>
    <div class="article-content">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  props: {
    title: String,
    content: String,
    date: String
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="less">
.article-detail {
  padding: 40px 20px;
  border-radius: 4px;
  background-color: #fff;
  min-height: 100vh;
  
  .article-title {
    text-align: center;
    font-size: 30px;
    font-weight: 800px;
    padding-bottom: 10px;
  }
  .article-date {
    text-align: center;
    font-size: 14px;
    padding-bottom: 20px;
  }
  .article-content {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: '#202020';
    font-size: 18px;
    line-height: 28.8px;
  }
}
</style>