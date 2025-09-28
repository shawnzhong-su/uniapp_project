<template>
  <view class="userLayout">
    <view class="userInfo">
      <view class="avatar">
        <image mode="aspectFill" src="../..//static/tabBar/user-h.png"></image>
      </view>
      <view class="ip">100.100.100</view>
      <view class="address"> From USA</view>
    </view>
    <view class="section">
      <view class="list">
        <view v-for=" item in 2" class="row">
          <view class="left">
            <uni-icons size="30" type="download"></uni-icons>
            <view class="text">My DownLoad</view>
          </view>
          <view class="right">
            <view class="text">33</view>
            <uni-icons size="30" type="right"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    <view class="section">
      <view class="list">
        <view v-for=" item in 3" class="row">
          <view class="left">
            <uni-icons size="30" type="download"></uni-icons>
            <view class="text">My DownLoad</view>
          </view>
          <view class="right">
            <view class="text">33</view>
            <uni-icons size="30" type="right"></uni-icons>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script lang="ts" setup>
import UniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue";
</script>


<style lang="scss" scoped>
.userLayout {
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50rpx 0;

    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .ip {
      font-size: 44rpx;
      color: #333333;
      padding: 20rpx 0 5rpx;
    }

    .address {
      font-size: 33rpx;
      color: #666666;
    }
  }

  .section {
    width: 690rpx;
    margin: 50rpx auto;
    border: 1px solid #eee;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

    .list {
      .row {
        display: flex;
        justify-content: space-between;
        padding: 0 30rpx;
        height: 100rpx;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: 0
        }

        .left {
          display: flex;
          align-items: center;
        }

        .right {
          display: flex;
          align-items: center;
          .text{
            color: #666666
          }
        }

      }
    }
  }
}

</style>
