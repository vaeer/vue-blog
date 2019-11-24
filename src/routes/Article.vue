<template>
  <div>
    <ArticleItem 
      :title='post'
      :content='content'
      :date='date'
      :onClick='this.clickArticle'
    />
  </div>

</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';
export default {
  name: 'Article',
  components: {
    ArticleItem
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