<template>
  <div class="myheader">
      <!-- 4个模块。logo,ul,搜索，头像 -->
      <div class="warp-header">
        <h1 class="logo" @click="logoClick"> </h1>
        <ul class="navList">
          <li class="nav" v-for="item,index in navList" :key="index" :class="active == index ? 'active' : '' " @click="navAction(index)">
              {{item.name}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, toRefs, onBeforeMount, onMounted ,defineComponent, defineEmits} from 'vue'
  const  testJson  = require('./navList.json');
  const emits = defineEmits(['tagclick'])
  const navList = testJson.navList
  const active = ref(0) 
  function navAction (index:any) {
        active.value = index
        //需要emit 出去一个 router 
        emits('tagclick',index)
    }
    const logoClick = () => {
      console.log('cccccc');
    }




</script>
<style scoped lang="scss">
@import './index.scss';

</style>