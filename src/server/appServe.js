//基础模板
/****
    export function getMenuList(){
     return new Promise((resolve, reject) =>{
        http({
            url:API.getMenuList,
            method: 'GET',
        }).then(({ data, status })=>{
             if (status != 200) {
                    //请求失败
                } else {
                    //请求成功
                    // 取得首字母，按字母先分类
                    resolve(data);
                }
        }).catch(error => {
                //请求失败
        })
     })
}
 */
import API from '../api'
import http from '../utils/http'

export function loginUser(data) {
    return new Promise((resolve, reject) => {
        
        http({
                url: API.LOGIN,
                method: 'GET',
                data: data
            })
            .then(({ data, status }) => {
                if (status != 200) {
                    //请求失败
                } else {
                    //请求成功
                    // 取得首字母，按字母先分类
                    resolve(data);
                }
            })
            .catch(error => {
                //请求失败
            })
    })
}

export function foodData(){
     return new Promise((resolve, reject) =>{
        http({
            url:API.getMenuList,
            method: 'GET',
        }).then(({ data, status })=>{
             if (status != 200) {
                    //请求失败
                } else {
                    //请求成功
                    resolve(data.data);
                }
        }).catch(error => {
                //请求失败
        })
     })
}