import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import AppButtonInputList from 'components/AppButtonInputList'

import AppLayout from 'components/AppLayout'
import AppHello from 'components/AppHello'

const components = [
  {
    name: 'Hello',
    component: AppHello,
    path: '/hello'
  },
  {
    name: 'Layout',
    component: AppLayout,
    path: '/layout'
  },
  {
    name: 'Button Input List',
    component: AppButtonInputList,
    path: '/buttoninputlist'
  }
]

const ComponentsList = () => (
  <ul>
    Components List
    {components.map(comp => (
      <li key={comp.name}>
        <Link to={comp.path}>{comp.name}</Link>
      </li>
    ))}
  </ul>
)

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ComponentsList} />
          {components.map(comp => (
            <Route
              key={comp.name}
              exact
              path={comp.path}
              /**
               * NOTICE HERE, PASSING THROUGH PROPS FROM STATE TO EACH COMPONENT
               */
              render={() => React.createElement(comp.component, this.props)}
              />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}
