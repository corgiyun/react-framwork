import axios from 'axios'

const baseURL = 'https://locahost:3000'
const DingRobotUrl =
  'robot/send?access_token=7e1d6a87dd72676c589d70c559f42e5eb6e895d74e475ccf5d017aa0252a490d'
const setHeader = {
  'Content-Type': 'application/json; charset=utf-8',
}
const instance = axios.create()

instance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
)

const request = (API_URL) => {
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
      .get(url, {
        headers: {},
      })
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }

  const post = (path, params) => {
    return instance({
      method: 'post',
      url: `${API_URL}/${path}`,
      data: params,
      headers: {},
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
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
    PostDingRobotMsg,
  }
}

export const server = request(baseURL)
