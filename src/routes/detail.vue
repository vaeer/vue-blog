<template>
  <div class="article-container">
    <article-detail
      :title='article.title'
      :content='article.content'
      :date='article.date'
    />
    <article-label />
  </div>
</template>

<script>
import articleDetail from '@/components/article-detail.vue';
import articleLabel from '@/components/article-label';
import { getArticle } from '../services/article';
export default {
  name: 'detail',
  props: {
    title: String,
    date: String
  },
  components: {
    'article-detail': articleDetail,
    'article-label': articleLabel
  },
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    const params = {
      title: this.title,
      date: this.date
    };
    getArticle(params).then(res => {
      this.article = res.result;
    });
  }
}
</script>

<style scoped lang="less">
  .article-container {
    display: flex;
  }
</style>