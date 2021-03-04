import React from 'react'
import HomeCourses from '../components/Web/HomeCourses'
import HowMyCoursesWork from '../components/Web/HowMyCoursesWork'
import MainBanner from '../components/Web/MainBanner'

export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
    </>
  )
}
