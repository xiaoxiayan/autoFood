// 配置 发送请求需要的API接口，根据文档

// 一般常亮命名用纯大写
// http://localhost:8081 本地 
// 可以这边切换成服务器 ip
// const SAT_HOST = 'http://120.79.84.215/';

// const SAT_HOST = 'http://localhost:8081';

const LOGIN:string = '/api/login/loginUsr'
const getMenuList:string = '/api/foodDetail/getItemDetail'
export default {
    LOGIN,
    getMenuList

}