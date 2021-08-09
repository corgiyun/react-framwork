import AsyncComponent from '../components/hoc/AsyncComponent'

const Test = AsyncComponent(() => import('../pages/performance/index'))

const routes = [{ path: '/test', component: Test }]

export default routes
