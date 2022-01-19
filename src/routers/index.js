import AsyncComponent from '../components/hoc/AsyncComponent.js'

const Test = AsyncComponent(() => import('../pages/performance/index'))
const Button = AsyncComponent(() => import('../pages/button/index'))
const Rx = AsyncComponent(() => import('../pages/rx/index'))
const Observer = AsyncComponent(() => import('../pages/rx/observer'))

const routes = [
  { path: '/test', component: Test },
  { path: '/', component: Button },
  { path: '/rx', component: Rx },
  { path: '/observer', component:  Observer}
]

export default routes
