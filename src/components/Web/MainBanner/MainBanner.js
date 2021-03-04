import { Col, Row } from 'antd'
import React from 'react'

import './MainBanner.scss'

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Aprender nuevas <br /> tecnologias web y móvil.
          </h2>
          <h3>
            A través de cursos prácticos, concisos y actualizados, creados por{' '}
            <br />
            profesionales con años de experiencia
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  )
}
