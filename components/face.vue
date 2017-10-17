<template>
  <el-badge is-dot>
    <el-popover
      ref="face"
      :placement="position"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>
    <div class="face">
      <img src="../static/6268025.jpg" alt="" v-popover:face>
    </div>
  </el-badge>
</template>
<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'bottom'
      }
    }
  }
</script>
<style>
.face{width:8rem;height:8rem;border-radius:50%;overflow:hidden;margin:0 auto;cursor: pointer;}
.face img{width:100%;height:100%;transition:0.3s;}
.face:hover img{transform:scale(1.1)}
.true .face{width:4rem;height:4rem;}
</style>
