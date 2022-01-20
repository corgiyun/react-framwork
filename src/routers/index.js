import AsyncComponent from '../components/hoc/AsyncComponent.js'

const Performance = AsyncComponent(() => import('../pages/performance/index'))
const Button = AsyncComponent(() => import('../pages/button/index'))
const Rx = AsyncComponent(() => import('../pages/rx/index'))
const Observer = AsyncComponent(() => import('../pages/rx/observer'))
const Test = AsyncComponent(() => import('../pages/test/index'))

const routes = [
  { path: '/performance', component: Performance },
  { path: '/', component: Button },
  { path: '/test', component: Test },
  { path: '/rx', component: Rx },
  { path: '/observer', component:  Observer}
]

export default routes
