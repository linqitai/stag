import Vue from 'vue'
import Router from 'vue-router'
import StagDetail from './pages/Stagedetail/stagdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StagDetail',
      component: StagDetail
    }
  ]
})
