import { Col, Icon, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import './NavigationFooter.scss'

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegacion</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  )
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="book" /> Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="code" /> Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="database" /> Bases de datos
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Politica de privacidad
        </a>
      </li>
    </ul>
  )
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="hdd" /> Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="appstore" /> CMS
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="user" /> Portfolio
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Politica de cookies
        </a>
      </li>
    </ul>
  )
}
