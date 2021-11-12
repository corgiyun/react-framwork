function isOO(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
export function isObj(obj) {
  return obj !== null && typeof obj === 'object' && !isArr(obj)
}
export function isPlainObj(obj) {
  if (!isOO(obj)) {
    return false
  }
  const ctor = obj.constructor
  if (!isFunc(ctor)) {
    return false
  }
  const proto = ctor.prototype
  if (!isOO(proto)) {
    return false
  }
  return proto.hasOwnProperty('isPrototypeOf')
}
export function isFunc(obj) {
  return typeof obj === 'function'
}
export function isNum(value) {
  return value !== null && typeof value === 'number' && value - value + 1 === 1
}
export function isStr(obj) {
  return typeof obj === 'string'
}
export function isBool(obj) {
  return typeof obj === 'boolean'
}
export function isArr(obj) {
  return Array.isArray(obj)
}
export function isUNN(obj) {
  return obj === null || obj === undefined || Number.isNaN(obj)
}
export function isEmptyObj(obj) {
  for (const key in obj) {
    return false
  }
  return true
}
export function isPromise(obj) {
  return (isObj(obj) || isFunc(obj)) && isFunc(obj.then)
}

export function isEvent(e) {
  return (
    e &&
    e.preventDefault &&
    e.stopPropagation &&
    Object.hasOwnProperty.call(e, 'target')
  )
}
