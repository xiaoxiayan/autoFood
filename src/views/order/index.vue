<template>
    <div class="order">
      <!-- 三个结构 核心。左右两个菜单，下方的结算和已经点了-->
      <!-- 搜索框 -->
      <div class="top">
          <h1>头部</h1>
      </div>
      <div class="content">
        <content :data="menusList"></content>
      </div>
      <div class="foot">
          <h2>底部</h2>
      </div>
      <!-- 广告 -->
      <!-- 菜单 -->
      <!-- 底部 -->
    </div>
</template>

<script>
import content from './content.vue'
import {foodData} from '@/server/appServe.js'
export default {
    name:'order',
    data(){
        return{
            menusList:[]
        }
    },
    component:{
        content
    },
    methods:{
        getData(){
            foodData().then(res=>{
               this.menusList = res 
            })
        },
    },
    mounted(){
        this.getData()  
    }
}
</script>

<style lang="less" scoped>
.order{
    width: 100%;
    height: 100%;
    .top{
        height: 15%;
        width: 100%;
    }
    .content{
        height: 70%;
    }
    .foot{
        height: 15%;
        width: 100%;

    }
}
</style>