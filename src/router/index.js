import Vue from 'vue'
import Router from 'vue-router'
import StagDetail from 'pages/stagdetail'
import ConfirmStage from 'pages/ConfirmStage/ConfirmStage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StagDetail',
      component: StagDetail
    },
    {
      path: '/confirmStage',
      name: 'ConfirmStage',
      component: ConfirmStage
    }
  ]
})
