<template>
  <div class="article-container">
    <div class="article-title">
      {{title}}
    </div>
    <div class="article-content">
      {{article}}
    </div>
    <div class="article-footer">
      {{date}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    title: String,
    article: String,
    date: String
  }
}
</script>

<style scope lang="less">
.article-container {
  position: relative;
  display: flex;
  flex-direction: column;
  color: #222;
  max-width: 600px;
  height: 300px;
  padding: 20px 10px;
  margin: 0 auto;
  .article-title {
    flex: 0 0 60px;
    font-size: 40px;
    font-weight: 500px;
  }
  .article-content {
    flex: 1;
    font-size: 16px;
    word-break: break-word;
    color: #666;
  }
  .article-footer {
    flex: 0 0 30px;
    font-size: 12px;
    color: #999;
  }
  // 0.5px细线
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #999;
    transform: scaleY(.5);
  }
}

</style>