<template>
  <div>
    <ArticleItem
      v-for='(item, index) of articleList'
      :key='index'
      :title='item.title'
      :content='item.content'
      :date='item.date'
      :onClick='clickArticle'
    />
  </div>
</template>

<script>
import { getArticleList } from '../services/article';
import ArticleItem from '@/components/ArticleItem.vue';
export default {
  name: 'Article',
  components: {
    ArticleItem
  },
  data() {
    return {
      articleList: []
    }
  },
  mounted () {
    getArticleList({}).then(res => {
      this.articleList = res.result;
      
    })
  },
  methods: {
    clickArticle() {
      alert(1);
    }
  }
}
</script>

<style>

</style>