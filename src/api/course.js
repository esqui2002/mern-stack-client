import { basePath, apiVersion } from './config'

export function getCoursesApi() {
  const url = `${basePath}/${apiVersion}/get-courses`

  return fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err
    })
}

export function getCourseDataUdemyApi(id) {
  const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`
  const coursesParams = `/?fields[course]=title,headline,url,price,image_480x270`

  const url = baseUrl + coursesParams

  return fetch(url)
    .then(async (res) => {
      return { code: res.status, data: await res.json() }
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err
    })
}
