<template>
    <div class="wyy">
        <myHeader  @tagclick="tagClick"></myHeader>  
        <my-banner class="banner"></my-banner>
        <contet class="content"></contet>
        
    </div>
</template>

<script lang="ts">
import axios from "@/server/axios";
import { defineComponent } from "vue";
import  { artistList } from "@/server/appServe"
import contet from './contet/index.vue'
import myHeader from './header/index.vue'
import myBanner from './model_banner/index.vue'
export default defineComponent({
            components:{
                myBanner,
                contet,
                myHeader
            },
            setup(){
                const getArtistLisst = (info:artistList) => {
                     axios({
                        url: 'artistList',
                        method: 'GET',
                        data:{
                            cat:info.cat,
                            initial:info.initial ? info.initial : ''
                        }
                    })
                }
                getArtistLisst({cat:1001})
                const tagClick = (index: number) => {
                    console.log(index,'emitindexs')

                }
                return {
                    tagClick
                }
            }

    })
</script>

<style scoped>
 @import "./index.scss"

</style>