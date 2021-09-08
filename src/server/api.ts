// 配置 发送请求需要的API接口，根据文档

// 一般常亮命名用纯大写
// http://localhost:8081 本地 
// 可以这边切换成服务器 ip
// const SAT_HOST = 'http://120.79.84.215/';

// const SAT_HOST = 'http://localhost:8081';
/*
    'LOGIN': '/api/login/loginUsr',
    'getMenuList': '/api/foodDetail/getItemDetail'
*/ 


const apiList = {
    'LOGIN': '/api/login/loginUsr',
    'getMenuList': '/api/foodDetail/getItemDetail'
  }

// typeof 获取 apiList 的变量类型， 然后 keyof 在获取 这个变量的 key值
// 然后定义 一个 type 
export type apiKeyType = keyof typeof apiList;

interface apiCommon{
    code :number;
}
interface getMenuListProps {
    name: string;
    menuList: object[];
    status: number;
    storeNo: string;
    type: number
}

export interface apiKeyDataType   {
    'LOGIN': {
       code: number;
       data : {
            name: string;
            age: number;
       }
    },
    'getMenuList': {
        code: number;
        data:getMenuListProps[]
    }
}

export default apiList;

