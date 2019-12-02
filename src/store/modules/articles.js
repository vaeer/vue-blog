import { getArticle, getArticleList } from '@/services/article';

const state = {
  articleList: [],
  article: {}
};

const mutations = {
    GET_ARTICLE_LIST(state, payload) {
        state.articleList = payload;
    },
    GET_ARTICLE(state, payload) {
        state.article = payload;
    }
}

const actions = {
    async getArticleList({commit}, payload) {
        const res = await getArticleList(payload);
        commit('GET_ARTICLE_LIST', res.result);
    },
    async getArticle({commit}, payload) {
        const res = await getArticle(payload);
        commit('GET_ARTICLE', res.result);
    }
}

const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
};