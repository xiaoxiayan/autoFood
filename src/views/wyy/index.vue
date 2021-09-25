<template>
    <div class="wyy">
        <myheader class="myheader"></myheader>  
        <banner class="banner"></banner>
        <contet class="content"></contet>
        
    </div>
</template>

<script lang="ts">
import axios from "@/server/axios";``
import { defineComponent } from "@vue/runtime-core";
import  { artistList } from "@/server/appServe"
import banner from './banner/index.vue'
import contet from './contet/index.vue'
import myheader from './header/index.vue'
export default defineComponent({
            components:{
                banner,
                contet,
                myheader,
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
            }

    })
</script>

<style scoped>
 @import "./index.scss"

</style>