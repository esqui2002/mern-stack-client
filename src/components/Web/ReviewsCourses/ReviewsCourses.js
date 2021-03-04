import React from 'react'
import { Avatar, Card, Col, Row } from 'antd'

import NoAvatar from '../../../assets/img/png/no-avatar.png'

import './ReviewsCourses.scss'

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los +35 mil estudiantes que estan aprediendo con mis
            cursos
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Alumno de Udemy"
                avatar={NoAvatar}
                review="Buen curso para las personas que quieran comenzar en el mundo del desarrollo móvil utilizando React Native y con énfasis en Expo."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="David Ramiro"
                subtitle="Alumno de Udemy"
                avatar={NoAvatar}
                review="Excelente curso, me sirvió muchísimo para mi tesis. Recomendado para aquellas personas que quieran empezar en el mundo de react native y las aplicaciones móviles."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Valentina Rubio"
                subtitle="Alumna de Udemy"
                avatar={NoAvatar}
                review="Excelente curso, y muy buena predisposición del profesor para responder las preguntas."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Mar Perez"
                subtitle="Alumno de Udemy"
                avatar={NoAvatar}
                review="La verdad que me ha gustado mucho el curso, muy completo en el que he podido aprender bastantes cosas sobre React Native y asÍ poder ya adentrarme por mÍ mismo en la creación de nuevas apps."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Jesus Cruz"
                subtitle="Alumno de Udemy"
                avatar={NoAvatar}
                review="Curso bastante interesante, aprender haciendo una aplicación es un método muy interesante, pero existen módulos que han sido eliminados (Login con Facebook), por lo que el curso está incompleto"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Francisco Garcia"
                subtitle="Alumno de Udemy"
                avatar={NoAvatar}
                review="Un excelente curso muy bien explicado por el profe Agustín y actualizado con las ultimas versiones posibles de las librerías , ya que hay algunas que se utilizan en el proyecto cambian sus versiones en cuestión de meses ."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  )
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props
  const { Meta } = Card

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  )
}
