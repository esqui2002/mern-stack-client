import React from 'react'
import { Button, Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import reactJsHooks from '../../../assets/img/jpg/react-js-hooks.jpg'
import reactNative from '../../../assets/img/jpg/react-native.jpg'
import javaScript from '../../../assets/img/jpg/javascript-es6.jpg'
import wordPress from '../../../assets/img/jpg/wordpress.jpg'
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg'
import cssGrid from '../../../assets/img/jpg/css-grid.jpg'

import './HomeCourses.scss'

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="React JS Hooks"
              subtitle="Intermedio - React/Javascript"
              link="http://google.com"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/Javascript"
              link="http://test.com"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="Javascript ES6"
              subtitle="Básico - Javascript"
              link="http://js.com"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="Wordpress"
              subtitle="Básico - Wordpress"
              link="http://wp.com"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestaShop}
              title="PrestaShop 1.7"
              subtitle="Básico - Prestashop"
              link="http://prestashop.com"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="CSS Grid"
              subtitle="Intermedio - CSS"
              link="http://css.com"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  )
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props
  const { Meta } = Card

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  )
}
