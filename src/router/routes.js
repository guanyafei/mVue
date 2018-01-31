// 首页
import home from '../pages/home.vue';
// import spinner from '../components/spinner.vue';
// 个人中心
import personal from '../pages/personal.vue';
// 搜索页
import search from '../pages/search.vue';
// 搜索结果页
import result from '../pages/result.vue';
// 分类
import category from '../pages/category.vue';
// 详情页
import detail from '../pages/detail.vue';
// 发表评论页
import comment from '../pages/comment.vue';
// 回复评论
import reply from '../pages/reply.vue';
// 登录
import login from '../pages/login.vue';
// 注册
import register from '../pages/register.vue';
// 修改密码
import resetPwd from '../pages/resetPwd.vue';

export default [
  {path:'/',component:home},
  {path:'/personal',component:personal},
  {path:'/search',component:search},
  {path:'/result',component:result},
  {path:'/category',component:category},
  {path:'/detail',component:detail},
  {path:'/comment',component:comment},
  {path:'/reply',component:reply},
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'/resetPwd',component:resetPwd},
  // {path:'/',component:spinner}
];
