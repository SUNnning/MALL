import axios from 'axios'

export function request(config){
    // 1.创建实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/w6",
        timeout: 5000        
    });

    // 2.对请求和响应的拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return err
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        return err
    })

    // 3.发送网络请求
    // instance(option).then(res => {
    //     success(res)
    // }).catch(err => {
    //     console.log(err)
    // })
    
    return instance(config)
}