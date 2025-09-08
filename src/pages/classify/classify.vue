<template>
  <view class="classify">
    <theme-item v-for="item in 15"></theme-item>

  </view>
</template>

<script lang="ts" setup>
import ThemeItem from "../../components/theme-item.vue";
</script>


<style lang="scss" scoped>
.classify {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}

</style>
