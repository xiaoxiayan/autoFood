<template>
    <div class="order">
      <!-- 三个结构 核心。左右两个菜单，下方的结算和已经点了-->
      <!-- 搜索框 -->
      <div class="top">
          <h1>头部</h1>
      </div>
      <div class="content">
        <menus :dataList="aa"></menus>
      </div>
      <div class="foot">
          <h2>底部</h2>
      </div>
      <!-- 广告 -->
      <!-- 菜单 -->
      <!-- 底部 -->
    </div>
</template>

<script lang="ts">
import menus from './content.vue'
import { foodData } from '@/server/appServe'
import { onMounted , reactive, ref, toRef } from 'vue'
export default {
    name:'order',
    components:{ menus },
    setup(){
        
        interface getDataProps {
                name: string;
                menuList: object[];
                status: number;
                storeNo: string;
                type: number
        }
        interface foodProps {
            code: number;
            data: getDataProps[];
            message:string
        }
        interface  dataProps {
            storeNo: string
            // sss: a
        }
        // const menusList = ref([])
        const pageData = reactive({
            menusList: []
        })
        onMounted(() => {
            foodData<foodProps , dataProps>( {'storeNo': '1001' } ).then((res) =>{
                // pageData.menusList = res.data.data
            })
            console.log(pageData.menusList,'aaaa')
        })
        const aa = toRef(pageData, 'menusList')
        return{
            aa
        }
        
    }
}
</script>

<style lang="scss" scoped>
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