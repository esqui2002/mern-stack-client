import React from 'react'
import HomeCourses from '../components/Web/HomeCourses'
import HowMyCoursesWork from '../components/Web/HowMyCoursesWork'
import MainBanner from '../components/Web/MainBanner'
import ReviewsCourses from '../components/Web/ReviewsCourses'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Agustin Navarro Galdon</title>
        <meta
          name="description"
          content="Home | Web sobre programacion"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  )
}
