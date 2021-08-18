<template>
    <div class="order">
      <!-- 三个结构 核心。左右两个菜单，下方的结算和已经点了-->
      <!-- 搜索框 -->
      <div class="top">
          <h1>头部</h1>
      </div>
      <div class="content">
        <menus :dataList="menusList"></menus>
      </div>
      <div class="foot">
          <h2 @click="changeWork('niii')">底部</h2>
      </div>
      <!-- 广告 -->
      <!-- 菜单 -->
      <!-- 底部 -->
    </div>
</template>

<script>

import menus from './content.vue'
import {foodData} from '@/server/appServe.js'
import {Person , CreateName , CreateWork} from './some.js'
export default {
    name:'order',
    data(){
        return{
            menusList:[],
            data:[
                {
                    name:'a 2',
                    age:30,
                    work:'bii'
                },
                {
                    name:'n 2',
                    age:302,
                    work:'bddi'
                },
                {
                    name:'c 3',
                    age:306,
                    work:'sssi'
                },
            ],
            
            arr :[]
              
                }
    },
    components:{
        menus
    },
    methods:{
        getData(){
            foodData().then(res=>{
                console.log(res.list);
               this.menusList = res.list 
            })
        },
        addSome(){
            
        },
        run(){
             for(let i= 0; i < this.data.length; i++){
                 this.arr[i] = this.candidate(this.data[i])

             }
            console.log(this.arr,'arrrrrrr')

        },
        candidate(param){
                var _candidate =new Person(param)
                _candidate.name = new CreateName(param.name)
                _candidate.work = new CreateWork(param.work)
                return _candidate
        },
        changeWork(){
            this.arr[0].work.changeWork('aaaasdasd')
            console.log(this.arr[0].work)
        }
    },
    mounted(){
        this.getData()  
       
        this.run()
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