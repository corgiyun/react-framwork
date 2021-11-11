import AsyncComponent from '../components/hoc/AsyncComponent'

const Test = AsyncComponent(() => import('../pages/performance/index'))
const Button = AsyncComponent(() => import('../pages/button/index'))

const routes = [
  { path: '/test', component: Test },
  { path: '/', component: Button },
]

export default routes
