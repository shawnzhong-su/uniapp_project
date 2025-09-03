<script>
export default {
  name: "theme-item"
}
</script>

<template>
  <view class="themeItem">
    <navigator class="box" url="">
      <image class="pic" mode="aspectFill" src="../common/images/classify1.jpg"></image>
      <view class="mask">明星美女</view>
      <view class="tab">3天前更新</view>
    </navigator>
  </view>

</template>

<style lang="scss" scoped>
.themeItem {
  .box {
    height: 340rpx;
    border-radius: 10rpx;;
    overflow: hidden;
    position: relative;

    .pic {
      width: 100%;
      height: 100%;
    }

    .mask {
      height: 70rpx;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(20rpx);
      font-weight: 600;
      font-size: 30rpx;
    }

    .tab {
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(250, 129, 90, 0.7);
      backdrop-filter: blur(1rpx);
      color: #fff;
      font-size: 22rpx;
      padding: 6rpx 14rpx;
      border-radius: 0 0 20rpx 0;
      transform: scale(0.8);
      transform-origin: left top;
    }
  }
}

</style>