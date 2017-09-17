<template>
  <div class="financing">
    <header>
      <i class="img"></i> 融资
    </header>
    <mt-swipe :auto="4000" :prevent="true" :stopPropagation="true" class="swiperWrapper">
      <mt-swipe-item><img src="../../common/images/banner_financing.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../common/images/banner_financing.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="contentWrapper">
      <div class="tabs" id="tabs">
        <div class="tab current">我的店</div>
        <div class="tab">我的家</div>
        <div class="tab">我的车</div>
      </div>
      <div class="content">
        <div class="store" v-show="isStore">
          我的店
        </div>
        <div class="home" v-show="isHome">
          我的家
        </div>
        <div class="car" v-show="isCar">
          我的车
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import { addEvent } from '../../common/js/utils'
export default {
  data() {
    return {
      isStore: true,
      isHome: false,
      isCar: false
    }
  },
  mounted() {
    let self = this
    let obj = document.getElementById('tabs').getElementsByClassName('tab')
    for (let i = 0; i < obj.length; i++) {
      addEvent(obj[i], 'click', function() {
        for (let j = 0; j < obj.length; j++) {
          obj[j].classList.remove('current')
        }
        this.classList.add('current')
        if (i === 0) {
          self.isStore = true
          self.isHome = false
          self.isCar = false
        } else if (i === 1) {
          self.isHome = true
          self.isStore = false
          self.isCar = false
        } else if (i === 2) {
          self.isCar = true
          self.isStore = false
          self.isHome = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './financing.scss';
</style>

