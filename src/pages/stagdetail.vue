<template>
  <div>
    <m-header>分期详情</m-header>
    <div class="border-bg"></div>
    <div class="content-fir">
      <div class="title">11111</div>
      <div class="center">11111</div>
      <div class="bottom">11111</div>
    </div>
    <div class="border-bg"></div>
    <div class="content-sec">
      <div class="fqhk">还款详情</div>
      <div class="fq">
        <span>1</span>
        <span>/</span>
        <em>12</em>
      </div>
    </div>
    <div class="border-bg"></div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1255.00</span>
    </div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comcolor">分期金额</div>
      <span>1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir last-child">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="border-bg"></div>
    <div class="content-thir">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="content-thir">
      <div class="comcolor">分期金额</div>
      <span>1254.00</span>
    </div>
    <div class="content-thir last-child">
      <div class="comfont">分期金额</div>
      <span class="comcolor">1254.00</span>
    </div>
    <div class="border-bg"></div>
    <div class="content-for">
      <div>套餐信息</div>
      <div></div>
    </div>
  </div>
</template>
 <script>
import mHeader from 'components/Header'
export default {
  data() {
    return {
      a: ''
    }
  },
  components: {
    mHeader
  }
}
</script>
 
 <style lang="scss">
.content-fir {
  text-align: center;
  font-family: PingFang-SC-Medium;
  .title {
    margin-top: 26px;
    width: 100%;
    font-size: 15px;
    color: #323232;
  }
  .center {
    margin-top: 6px;
    color: #fc633d;
    font-size: 20px;
  }
  .bottom {
    margin-top: 12px;
    margin-bottom: 14px;
    font-size: 15px;
    color: #aaaaaa;
  }
}

.content-sec {
  height: 51px;
  .fqhk {
    float: left;
    line-height: 51px;
    margin-left: 15px;
  }
  .fq {
    float: right;
    line-height: 51px;
    margin-right: 15px;
  }
}

.content-thir {
  height: 13px;
  margin: 0 15px;
  padding-top: 15px;
  div {
    float: left;
  }
  span {
    float: right;
  }
}

.last-child {
  margin-bottom: 15px;
}

.content-for {
  height: 51px;
  line-height: 51px;
  margin: 0 15px;
  div {
    float: left;
  }
  span {
    float: right;
  }
}
</style>

