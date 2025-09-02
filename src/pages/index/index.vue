<template>
  <view class="homeLayout">
    <view class="banner">
      <swiper indicator-active-color="rgba(255,255,255,0.5)" indicator-dots="True" autoplay="True">
        <swiper-item>
          <image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="notice">
      <view class="left">
        <uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
        <text class="text">公告</text>
      </view>
      <view class="center">
        <swiper vertical="true" autoplay="true" interval="1500" duration="300" circular="">
          <swiper-item v-for="item in 4">testesttesttesttesttesttesttesttesttesttesttestt</swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" size="16" color="#28b389"></uni-icons>
      </view>
    </view>

    <view class="select">
      <common-title>
        <template #name>每日推荐</template>
      </common-title>
      <view class="content">
        <scroll-view scroll-x="true">
          <view class="box" v-for="item in 8">
            <image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
      </common-title>
    </view>
  </view>
</template>


<script setup>
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
import CommonTitle from "../../components/common-title.vue";
</script>

<style lang="scss" scoped>
.homeLayout {
  .banner {
    width: 750rpx;
    padding: 30rpx 0;

    swiper {
      width: 750rpx;
      height: 340rpx;

      &-item {
        width: 100%;
        height: 100%;
        padding: 0 30rpx;

        image {
          width: 100%;
          height: 100%;
          border-radius: 50rpx;
        }
      }
    }
  }

  .notice {
    width: 690rpx;
    height: 80rpx;
    background: #ccc;
    margin: 0 auto;
    border-radius: 80rpx;
    display: flex;
    line-height: 80rpx;

    .left {
      width: 140rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        color: #28b389;
        font-size: 28rpx;
        font-weight: 600;

      }
    }

    .right {
      width: 70rpx;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    .center {
      flex: 1;

      swiper {
        height: 100%;

        &-item {
          height: 100%;
          font-size: 30rpx;
          color: #666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .select {
    padding-top: 50rpx;

    .content {
      width: 720rpx;
      margin-left: 30rpx;
      margin-top: 30rpx;

      scroll-view {
        white-space: nowrap;

        .box {
          width: 200rpx;
          height: 430rpx;
          display: inline-block;
          margin-right: 15rpx;

          image {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }

        }

        .box:last-child {
          margin-right: 30rpx
        }


      }
    }
  }
}
</style>