import Vue from 'vue'
import Router from 'vue-router'

const StagDetail = (resolve) => {
  import('pages/stagdetail').then((module) => {
    resolve(module)
  })
}
const ConfirmStage = (resolve) => {
  import('pages/ConfirmStage/ConfirmStage').then((module) => {
    resolve(module)
  })
}

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
