/* eslint-disable */
import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

const menuGlobal = [
  {
    id: 'aaa',
    pid: '0',
    name: 'aaa页',
    icon: 'user',
    path: '/aaa',
    models: () => [import('./models/aa')], // models可多个
    component: () => import('./routes/a')
  },
  {
    id: 'bbb',
    pid: '0',
    name: 'bbb页',
    icon: 'user',
    path: '/aaa/bbb',
    models: () => [import('./models/bb')], // models可多个
    component: () => import('./routes/b')
  },
  {
    id: 'ccc',
    pid: '0',
    name: 'ccc页',
    icon: 'user',
    path: '/ccc',
    models: () => [import('./models/cc')], // models可多个
    component: () => import('./routes/c')
  }
]

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          menuGlobal.map(({ path, ...dynamics }, index) => (
            <Route
              key={index}
              path={path}
              exact
              component={dynamic({
                app,
                ...dynamics
              })}
            />
          ))
        }
      </Switch>
    </Router>
  )
}

export default RouterConfig
