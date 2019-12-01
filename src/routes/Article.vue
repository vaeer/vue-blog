<template>
  <div>
    <article-item
      v-for='(item, index) of articleList'
      :key='index'
      :title='item.title'
      :content='item.content'
      :date='item.date'
      :onClick='goDetail.bind(this, item)'
    />
  </div>
</template>

<script>
import { getArticleList } from '../services/article';
import articleItem from '@/components/article-item.vue';
import moment from 'moment';
export default {
  name: 'Article',
  components: {
    'article-item': articleItem
  },
  data() {
    return {
      articleList: []
    };
  },
  mounted () {
    getArticleList({}).then(res => {
      this.articleList = res.result;
    });
  },
  computed: {
    
  },
  methods: {
    goDetail(item) {
      const date = moment(item.date).format('YYYYMMDD');
      const title = item.title;
      this.$router.push({path: `/article/${date}/${title}`});
    }
  }
}
</script>

<style>

</style>