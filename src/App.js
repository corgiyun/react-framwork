import React, { Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Routers from './routers'

function Fallback() {
  return <div>loading...</div>
}

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          {Routers.map((item, i) => {
            return (
              <Route
                exact
                key={i}
                path={item.path}
                component={item.component}
              />
            )
          })}
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
