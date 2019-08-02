/*
 * @Author: Tiny 
 * @Date: 2019-08-02 10:23:05 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-02 17:57:21
 */
import { message } from 'antd'
import axios from 'axios'
// import { Redirect } from 'react-router-dom';
// import * as router from './router'
// import { exportExcel } from '../utils/util'

const service = axios.create({
  baseURL: '/enterprise-manage-api',
  timeout: 10000,
  withCredentials: true
})

const handleErr = (err: any) =>{
  if (err) {
    switch (err.status) {
      case 401:
        // history.push('/login')
        // return (<Redirect to='/login' />)
        // break
      case 404:
        // return (<Redirect to='/error' />)
        // break
    }
    message.warning({
      content: err.data.message,
      type: 'error'
    })
  } else {
    message.warning({
      content: '连接服务器失败',
      type: 'error'
    })
  }
}

// 响应拦截
service.interceptors.response.use((res: any) => {
  if (res.status === 200) {
    return res
  }
}, (err) => {
  handleErr(err.response)
  return Promise.reject(err)
})

export default service
