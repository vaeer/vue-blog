<template>
  <div class="article-container">
    <article-detail
      :title='article.title'
      :content='article.content'
      :date='article.date'
      class="article-detail"
    />
    <article-label
      :labels='labelList'
      class="article-label"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
      
    };
  },
  mounted() {
    const params = {
      title: this.title,
      date: this.date
    };
    this.$store.dispatch('getArticle', params);
  },
  computed: mapState({
    article: state => state.articles.article,
    labelList: state => state.labels.labelList
  }),
  methods: {
    ...mapActions([
      'getArticle'
    ])
  }
}
</script>

<style scoped lang="less">
  .article-container {
    display: flex;
    .article-detail {
      width: 75%;
    }
    .article-label {
      width: 25%;
    }
  }
</style>