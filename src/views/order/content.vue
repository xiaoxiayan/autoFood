<template>
    <div class="contentBox">
        <div class="menusLife">
            <div class="list" v-for="item,index in myList" :key="index" :class="active == index?'active':''" @click="listAction(index)">
                {{item.name}}
            </div>
        </div>
        <div class="menusRight">
            <div class="listDetail" v-for="item,index in myList" :key="index">
                  <div class="title"> {{item.name}}</div>  
                  <div class="content">
                    <div class="detail" v-for="el,index in item.menuList" :key="index">
                        <img :src="el.pic">
                        <div>aaaaaaa</div>

                    </div>
                  </div>  
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"menus",
    props:{
        dataList:Array
            
        
    
    },
    watch:{
        dataList:{
            handler:function(newVal,oldVal){
                this.myList = JSON.parse(JSON.stringify(newVal))
            },
            deep:true
        }
    
    },
    data(){
        return {
            myList:[],
            active:''
        }
    },
    methods:{
        //处理一下
        listAction(index){
            //需要跳到对应的锚点，菜单颜色改变
            this.active = index
        }
    },
    mounted(){
    }

}
</script>

<style lang="less" scoped>
    .contentBox{
        height: 100%;
        .menusLife{
            display: inline-block;
            background-color: #f9f9f9;
            padding-top: 10px;
            width: 20%;
            height:100%;
            overflow: auto;
            box-sizing: border-box;
            .list{
                padding: 10px 5px;
            }
        }
        .menusRight{
            display: inline-block;
            width: 80%;
            box-sizing: border-box;
            height: 100%;
            overflow: auto;
            .listDetail{
                .title{
                    text-align: left;
                    margin: 10px;
                }
                .content{
                .detail{
                    display: flex;
                    padding: 5px;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    }
                }
            }
        }
        .active{
            background-color: #fff;
        
        }
    }

</style>