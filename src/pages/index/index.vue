<template>
  <view class="homeLayout">
    <view class="banner">
      <swiper autoplay="True" indicator-active-color="rgba(255,255,255,0.5)" indicator-dots="True">
        <swiper-item>
          <image mode="aspectFill" src="../../common/images/banner1.jpg"></image>
        </swiper-item>
        <swiper-item>
          <image mode="aspectFill" src="../../common/images/banner1.jpg"></image>
        </swiper-item>
        <swiper-item>
          <image mode="aspectFill" src="../../common/images/banner1.jpg"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="notice">
      <view class="left">
        <uni-icons color="#28b389" size="20" type="sound-filled"></uni-icons>
        <text class="text">公告</text>
      </view>
      <view class="center">
        <swiper autoplay="true" circular="" duration="300" interval="1500" vertical="true">
          <swiper-item v-for="item in 4">testesttesttesttesttesttesttesttesttesttesttestt</swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons color="#28b389" size="16" type="right"></uni-icons>
      </view>
    </view>

    <view class="select">
      <common-title>
        <template #name>每日推荐</template>
        <template #custom>
          <view class="date">

            <uni-icons color="#28b389" size="18" type="calendar-filled"></uni-icons>
            <view class="text">
              <uni-dateformat :date="Date.now() " format="dd日"></uni-dateformat>
            </view>
          </view>
        </template>

      </common-title>
      <view class="content">
        <scroll-view scroll-x="true">
          <view v-for="item in 8" class="box">
            <image mode="aspectFill" src="../../common/images/preview_small.webp"></image>
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator class="more" url="">More ++</navigator>
        </template>
      </common-title>
      <view class="content">
        <theme-item v-for="item in 8"></theme-item>
      </view>
    </view>
  </view>
</template>


<script lang="ts" setup>
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
import UniDateformat from '@dcloudio/uni-ui/lib/uni-dateformat/uni-dateformat.vue'
import CommonTitle from "../../components/common-title.vue";
import ThemeItem from "../../components/theme-item.vue";

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

    .date {
      color: #28b389;
      display: flex; //显示在一行
      align-items: center;

      .text {
        margin-left: 5rpx;
      }
    }
  }

  .theme {
    padding-top: 50rpx;

    .more {
      font-size: 32rpx;
      color: #888;
    }

    .content {
      margin-top: 30rpx;
      padding: 0 30rpx;
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>