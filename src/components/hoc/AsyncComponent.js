import { lazy } from 'react'

export default function AsyncComponent(component) {
  return lazy(component)
}
