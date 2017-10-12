<template>
  <el-badge is-dot>
    <div class="face">
      <img src="../static/6268025.jpg" alt="">
    </div>
  </el-badge>
</template>
<style>
.face{width:8rem;height:8rem;border-radius:50%;overflow:hidden;margin:0 auto;cursor: pointer;}
.face img{width:100%;height:100%;transition:0.3s;}
.face:hover img{transform:scale(1.1)}
.true .face{width:4rem;height:4rem;}
</style>
