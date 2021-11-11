import axios from 'axios'
import { message } from 'antd'

const API_URL = process.env.REACT_APP_API_URL
const DingRobotUrl =
  'robot/send?access_token=7e1d6a87dd72676c589d70c559f42e5eb6e895d74e475ccf5d017aa0252a490d'

const setHeader = {
  'Content-Type': 'application/json; charset=utf-8',
}
const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    token: '',
  },
  timeout: 10000, // 请求超时时间
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    // console.log(res)
    if (res.code === 401) {
      // 一些处理
    }
    return Promise.resolve(res)
  },
  (error) => Promise.reject(error)
)

const service = () => {
  const get = (path, params = {}) => {
    const searchParams =
      Object.keys(params).length > 0
        ? '?' +
          Object.keys(params)
            .map((key) => {
              const paramValue = `${params[key]}`.trim()
              return paramValue !== ''
                ? encodeURIComponent(key) + '=' + encodeURIComponent(paramValue)
                : ''
            })
            .filter(Boolean)
            .join('&')
        : ''
    const url = `${API_URL}/${path}/${searchParams}`
    return instance
      .get(url, {})
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }

  const post = (path, params) => {
    return instance({
      method: 'post',
      url: `${API_URL}/${path}`,
      data: params,
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }
  const exporter = (path, params = {}, fileName = '导出数据') => {
    const searchParams = Object.keys(params)
      .map((key) => {
        const paramValue = `${params[key]}`.trim()
        return paramValue !== ''
          ? encodeURIComponent(key) + '=' + encodeURIComponent(paramValue)
          : ''
      })
      .filter((item) => item !== '')
      .join('&')
    return instance
      .get(`${API_URL}/${path}?${searchParams}`, {
        responseType: 'blob',
      })
      .then((response) => {
        if (response.data.type.includes('application/json')) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target.readyState === 2) {
              const backJson = JSON.parse(e.target.result)
              message.destroy()
              message.error(`${backJson.msg}`, 5)
              return Promise.reject(backJson)
            }
          }
          reader.readAsText(response.data)
        } else {
          const url = window.URL.createObjectURL(response.data)
          const a = document.createElement('a')
          a.href = url
          a.download = `${fileName}.xlsx`
          a.click()
          window.URL.revokeObjectURL(url) // 释放blob对象
        }
      })
      .catch((error) => {
        return error
      })
  }

  const PostDingRobotMsg = (params) => {
    return instance({
      method: 'post',
      url: `${DingRobotUrl}`, // 代理已设置为钉钉的接口
      data: params,
      headers: setHeader,
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }
  return {
    get,
    post,
    exporter,
    PostDingRobotMsg,
  }
}

export default service()
