<template>
  <div class="hello">
    <h1>{{ 'test of webScoket' }}</h1>
    <button @click="initWebSocket"> let Go </button>
    <div>
      <input type="text" v-model="inputValue">
      <button @click="action">发送</button>
    </div>
    <h2>即将发送的内容是：{{ inputValue}}</h2>
  </div>
</template>

<script>
import {loginUser} from '../server/appServe.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 data(){
  return {
    heartbeatTimer:'',
    redata:'',
    webSocket:'',
    inputValue:''
  }
 },
    methods: {
    action(){
      this.websocketsend(this.inputValue)
    },
    // web socket
    initWebSocket() {
      // 判断当前浏览器是否支持WebSocket
      if ('WebSocket' in window) {
        // 初始化weosocket(必须)  配置服务器端 WebSocket 接受 url， 此处按照自己的项目路径进行配置
        let socketUrl = `ws://120.79.84.215:8080/food/webStocket/lsc` 
        this.webSocket = new WebSocket(socketUrl) // 新建一个webstock对象
        this.webSocket.onopen = this.webSocketOnOpen
        this.webSocket.onmessage = this.webSocketOnMessage
        this.webSocket.onerror = this.webSocketOnError
        this.webSocket.onclose = this.webSocketOnClose
      } else {
        this.$message.error('当前浏览器不支持 websocket')
      }
    },
    webSocketOnOpen(event) {
      console.log('---连接建立成功---',event)
      this.heartbeatTimer = setInterval(() => {
        this.websocketsend('PING')
      }, 30 * 1000) // 30 秒发一次心跳包
    },
    webSocketOnError(err) {
    console.log(err,'错误');
 },
   webSocketOnMessage(e) {
      // 数据接收
      this.redata = e.data
      console.info('this.redata=',this.redata)
      //此处获取到服务器推送的数据，就可以进行后续操作 。。。
    },
    websocketsend(Data) {
        console.log('数据发送=====',Data);
      // 数据发送
      this.webSocket.send(Data)
    },
    webSocketOnClose(e) {
      console.log('断开连接', e)
      if (this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer) //清除定时器
      }
    
    }
  },
  mounted(){
  let parmas = {
            storeNo:1,
            usrId:1,
            password:1
                  }
  loginUser(parmas).then(res=>{
  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
