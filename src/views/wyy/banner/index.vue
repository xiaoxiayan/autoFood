<template>
  <div>
      这个是广告位置
  </div>
</template>

<script lang='ts' setup>
import axios from 'axios'
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
axios({
  url: '/aaa/banner',
  method: 'GET'
}).then(res => {
  console.log(res, 'res')
})
const data = reactive({})

</script>
<style scoped >
</style>