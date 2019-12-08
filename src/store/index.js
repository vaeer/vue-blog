import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles';
import labels from './modules/labels';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    articles,
    labels
  }
});

export default store;