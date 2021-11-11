import service from './index'

export function fetchList(params) {
  return service.get('v1/user', params)
}
