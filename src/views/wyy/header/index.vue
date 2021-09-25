<template>
  <div class="myheader">
      <!-- 4个模块。logo,ul,搜索，头像 -->
      <div class="logo">
        <img src="~@/assets/img/logo.png" >
      </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: 'myheader',
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang="scss">
@import './index.scss';
.myheader{
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .logo{
        height: 40px;
        width: 177px;
        img{
            height: 100%;
        }

    }

}
</style>