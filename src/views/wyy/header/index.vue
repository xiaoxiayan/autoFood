<template>
  <div class="myheader">
      <!-- 4个模块。logo,ul,搜索，头像 -->
      <div class="warp-header">
        <h1 class="logo"> </h1>
        <ul class="navList">
          <li class="nav" v-for="item,index in navList" :class="active == index ? 'active' : '' " @click="navAction">
              {{item.name}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: 'myheader',
  emits:['click'],
  setup(context) {
    const testJson = require('./navList.json');
    const data = reactive({
      navList:testJson.navList,
      active:0
    })
    const navAction = (index:number) => {
        data.active = index 
        //需要emit 出去一个 router 
        context.emit("click");
    }
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang="scss">
@import './index.scss';

</style>