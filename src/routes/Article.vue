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
    <el-pagination
      layout="prev, pager, next"
      :total="50"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import articleItem from '@/components/article-item.vue';
import moment from 'moment';
export default {
  name: 'article-list',
  components: {
    'article-item': articleItem
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      total: 0
    };
  },
  mounted () {
    this.$store.dispatch('getArticleList', {});
    this.$store.dispatch('getLabelList', {});
  },
  computed: mapState({
    articleList: state => state.articles.articleList,
    labelList: state => state.labels.labelList
  }),
  methods: {
    ...mapActions([
      'getArticleList',
      'getLabelList'
    ]),
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