import { Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import PostInfo from '../components/Web/Blog/PostInfo'
import PostsListWeb from '../components/Web/Blog/PostsListWeb'

function Blog(props) {
  const { location, history } = props
  const { url } = useParams()

  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        {url ? (
          <PostInfo url={url} />
        ) : (
          <PostsListWeb location={location} history={history} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  )
}

export default Blog
