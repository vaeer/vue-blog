<template>
  <div class="article-container" @click="onClick">
    <div class="article-title">
      {{ title }}
    </div>
    <div class="article-content" @click="onClick">
      {{ content }}
    </div>
    <div class="article-footer">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "article-item",
  props: {
    title: String,
    content: String,
    date: String,
    onClick: Function
  }
};
</script>

<style scoped lang="less">
.article-container {
  position: relative;
  display: flex;
  flex-direction: column;
  color: #222;
  background-color: #fff;
  max-width: 600px;
  height: 300px;
  padding: 20px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.05, 1.05);
  }
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      opacity: 1;
    }

  }
  .article-title {
    flex: 0 0 60px;
    font-size: 40px;
    font-weight: 500px;
    cursor: pointer;
  }
  .article-content {
    flex: 1;
    font-size: 16px;
    word-break: break-word;
    color: #666;
    cursor: pointer;
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
