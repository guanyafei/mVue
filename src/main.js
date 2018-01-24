// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import 'mint-ui/lib/style.css';
import Mint from 'mint-ui';
import Common from './App.vue';
import routes from '../src/router/routes.js';
/*rem 不同移动端适配*/
import './assets/js/rem.js';
/*防止移动端300毫秒延迟*/
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
};
/*阻止 vue 在启动时生成生产提示*/
Vue.config.productionTip = false;

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(Common)
}).$mount('#app');
