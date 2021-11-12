import { action } from 'mobx'
import { isFunc } from '@/utils'

// 重置mobx的store
export const resetStore = action((self, Instance, propNames) => {
  if (self && Instance) {
    const store = isFunc(Instance) ? new Instance() : Instance
    let allProps
    if (Array.isArray(propNames)) {
      allProps = propNames
    } else {
      const proto = Object.getPrototypeOf(store)
      const ownPropsName = Object.getOwnPropertyNames(store)
      const protoName = Object.getOwnPropertyNames(proto)
      allProps = ownPropsName.concat(protoName)
    }
    allProps.forEach((name) => {
      if (!isFunc(store[name]) && self[name] !== store[name]) {
        if (self[name]?.$storeName) {
          self[name]?.resetStore()
        } else {
          self[name] = store[name]
        }
      }
    })
  }
})

export function overrideStore(instance, overrides) {
  Object.keys(overrides || {}).forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(overrides, name)
    if (desc.get) {
      Object.defineProperty(instance, name, desc)
    } else {
      instance[name] = overrides[name]
    }
  })
}
export function getPathLevel(pathname, level = 1) {
  const pathSplit = pathname.split('/').filter(Boolean)
  if (pathSplit.length >= level) {
    return '/' + pathSplit.splice(0, level).join('/')
  }
}
