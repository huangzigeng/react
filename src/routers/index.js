// 路由可以一个模块配置一个文件  方便后期维护  引用方式在 src/index.js
import home from '../views/home/index'
import about from '../views/about/index'
import topics from '../views/topics/index'
const r = [
  {
    path: '/',
    exact: true,
    component: home
  },
  {
    path: '/about',
    replace: true,
    component: about
  },
  {
    path: '/topics',
    component: topics
  }
]
export default r