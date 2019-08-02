/*
 * @Author: Tiny 
 * @Date: 2019-08-02 10:39:54 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-02 16:56:27
 */

import loadable from '@loadable/component';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import App from '../App';
/**
 * 1：web时应该用react-router-dom，而不是react-router
 * 2：react-router-dom没有Router，应该：BrowserRouter as Router
*/

const RouterList: any[] = [
  {
    component: loadable(() => import('../views/home/home')),
    name: 'home',
    path: '/home',
  },
  {
    component: loadable(() => import('../views/login')),
    name: 'login',
    path: '/'
  },
  {
    component: loadable(() => import('../views/error/404')),
    name: '404',
    path: '/error'
  }
]

class RouterMap extends React.Component {
  public render() {
    return (
      <Router>
        <App>
          <Switch>
            {
              RouterList.map(item => {
                return (
                  <Route
                    key={ item.path }
                    path={ item.path }
                    exact={ true }
                    component={
                      loader: item.component
                    }
                  />
                )
              })
            }
          </Switch>
        </App>
      </Router>
    )
  }
}

export default RouterMap;