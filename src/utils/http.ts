/*
 * @Author: Loong wentloop@gmail.com
 * @Date: 2025-06-21 09:19:08
 * @LastEditors: Loong wentloop@gmail.com
 * @LastEditTime: 2025-06-21 10:34:03
 * @FilePath: \web-foreign-trade-mall\src\utils\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { env } from './env'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: env.apiUrl, // 从环境变量获取API基础URL
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送之前做一些处理，比如添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 开发环境打印请求信息
    if (env.isDev) {
      console.warn('Request:', {
        url: config.url,
        method: config.method,
        params: config.params,
        data: config.data,
      })
    }

    return config
  },
  (error: Error) => {
    // 处理请求错误
    console.error('Request error:', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data

    // 开发环境打印响应信息
    if (env.isDev) {
      console.warn('Response:', {
        url: response.config.url,
        status: response.status,
        data: res,
      })
    }

    // 直接返回数据，不做状态码判断
    // 因为后端返回的数据结构可能不包含 code 字段
    return res

    // // 这里可以根据后端的约定判断响应是否成功
    // if (res.code === 200 || res.code === 0) {
    //   return res
    // }

    // // 处理其他状态码
    // handleErrorStatus(res.code, res.message)
    // return Promise.reject(new Error(res.message || 'Error'))
  },
  (error: Error & { response?: { status: number, data: any } }) => {
    // 处理响应错误
    console.error('Response error:', error)
    const { status, data } = error.response || {}
    handleErrorStatus(status || 0, data?.message || error.message)
    return Promise.reject(error)
  },
)

// 处理错误状态
function handleErrorStatus(status: number, message: string) {
  // 开发环境打印错误信息
  if (env.isDev) {
    console.error(`Error ${status}: ${message}`)
  }

  switch (status) {
    case 401:
      // 未登录或token过期
      // 可以在这里处理登出逻辑
      break
    case 403:
      // 没有权限
      break
    case 404:
      // 资源不存在
      break
    case 500:
      // 服务器错误
      break
    default:
      console.error(message)
  }
}

// 封装请求方法
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  },

  // 上传文件
  upload<T = any>(data: FormData, config?: AxiosRequestConfig): Promise<T> {
    return service.post(env.uploadUrl, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    })
  },
}

export default http
