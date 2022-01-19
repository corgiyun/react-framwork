import service from './request'

export function fetchList(params) {
  return service.get('v1/user', params)
}
export function fetchIndex(params) {
  return service.get('/users', params)
}
export function login(params) {
  return service.post('users/login', params)
}