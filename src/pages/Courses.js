import { Col, notification, Row, Spin } from 'antd'
import React, { useState, useEffect } from 'react'
import { getCoursesApi } from '../api/course'
import CoursesList from '../components/Web/Courses/CoursesList'
import PresentationCourses from '../components/Web/Courses/PresentationCourses'

export default function Courses() {
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    getCoursesApi()
      .then((response) => {
        if (response?.code !== 200) {
          notification['warning']({ message: response.message })
        } else {
          setCourses(response.courses)
        }
      })
      .catch(() => {
        notification['error']({
          message: 'Error del servidor, intentelo mas tarde',
        })
      })
  }, [])
  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        <PresentationCourses />
        {!courses ? (
          <Spin
            tip="Cargando cursos"
            style={{ textAlign: 'center', width: '100%', padding: '20px' }}
          />
        ) : (
          <CoursesList courses={courses} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  )
}
