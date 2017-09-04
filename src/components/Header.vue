<template>
  <header>
    <div>

    </div>
    <slot></slot>
  </header>
</template>
<style lang="scss" scoped>
header {
  display:flex;
  height: 44px;
  justify-content: center;
  line-height: 44px;
  font-size: 18px;
  font-family: PingFang-SC-Medium;
  color: #323232;
  .back-img {
    width: 10px;
    height: 17px;
    background: url('../../common/images/btn_back.png');
  }
}
</style>

