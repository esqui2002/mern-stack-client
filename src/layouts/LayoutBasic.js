import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Col, Layout, Row } from 'antd'

import './LayoutBasic.scss'
import MenuTop from '../components/Web/MenuTop'

export default function LayoutBasic(props) {
  const { routes } = props
  const { Footer } = Layout

  return (
    <Row>
      <Col lg={4} />
      <Col lg={16}>
        <MenuTop />
        <LoadRoutes routes={routes} />
        <Footer>Alberto Esquitino Pascual</Footer>
      </Col>
      <Col lg={4} />
    </Row>
  )
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  )
}
