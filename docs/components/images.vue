<template>
  <div class="container" id="con">
    <div class="item">
      <img src="/logo.jpg" alt="" />
      <div class="desc">1. 咖啡厅的小憩</div>
    </div>
    <div class="item">
      <img src="/logo1.jpg" alt="" />
      <div class="desc">2. 夕阳下的背影，有一股柔弱感，让人情不自禁生出一种想要呵护的感觉</div>
    </div>
    <div class="item">
      <img src="/logo2.jpg" alt="" />
      <div class="desc">3. 海边与夕阳</div>
    </div>
    <div class="item">
      <img src="/logo3.jpg" alt="" />
      <div class="desc">4. 海边，夕阳 and 伤感💦</div>
    </div>
    <div class="item">
      <img src="/logo4.jpg" alt="" />
      <div class="desc">5. 时尚girl</div>
    </div>
    <div class="item">
      <img src="/logo5.jpg" alt="" />
      <div class="desc">6. 这天是最美的，就连一个不认识的小孩都忍不住打招呼：hi~ 姐姐😆</div>
    </div>
    <div class="item">
      <img src="/logo6.jpg" alt="" />
      <div class="desc">7. 这一天，你穿的鞋子很硬，但还是走了很久的路</div>
    </div>
    <div class="item">
      <img src="/logo7.jpg" alt="" />
      <div class="desc">8. 这一天，让你受苦了，是不是脚都磨出泡了😭</div>
    </div>
    <div class="item">
      <img src="/logo8.jpg" alt="" />
      <div class="desc">9. 第一次收到礼物~</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.container {
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
}
.item {
  background-color: #f9f9f9;
  flex: 1 0 50%;
  height: max-content;
  border-radius: 8px;
  padding: 20px;
}
.item img {
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  vertical-align: top;
}
.desc {
  padding: 0;
}
</style>
