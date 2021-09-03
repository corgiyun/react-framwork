import AsyncComponent from '../components/hoc/AsyncComponent'

const Test = AsyncComponent(() => import('../pages/performance/index'))
const XiaoHe = AsyncComponent(() => import('../pages/xiaohe/index'))

const routes = [
  { path: '/test', component: Test },
  { path: '/xiaohe', component: XiaoHe },
]

export default routes
