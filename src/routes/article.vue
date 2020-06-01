<template>
  <div class="article">
    <div class="left">
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
    <div class="right">
      <article-label
        :labels='labelList'
        class="article-label"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import articleItem from '@/components/article-item';
import articleLabel from '@/components/article-label';
import moment from 'moment';
export default {
  name: 'article-list',
  components: {
    'article-item': articleItem,
    'article-label': articleLabel
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

<style lang="less" scoped>
  .article {
    display: flex;
    .left {
      width: 75%;
    }
    .right {
      width: 25%;
    }
  }

</style>