import axios from 'axios'
export default function ajax(url="",params={},type='GET'){
    let promise;
    //1.返回promise对象
    return new Promise((resolve,reject) => {
        //1.1判断请求方式
        if("GET" === type.toUpperCase()){
        //1.2拼接字符串
            let paramsStr = "";
            Object.keys(params).forEach(key => {
                paramsStr+=key +"="+params[key]+"&";
            })
            //1.3 过滤最后的&
            if(paramsStr !== ""){
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf("&"));
            }
            //1.4拼接完整路径
            url+="?"+paramsStr;
            //1.5发起get请求
            promise = axios.get(url)
        }else if("POST" === type.toUpperCase()){
            promise = axios.post(url,params)
        }
        //1.6返回结果
        promise.then((response) => {
            resolve(response.data)
        }).catch(error => {
            reject(error);
        })
    })
    
}