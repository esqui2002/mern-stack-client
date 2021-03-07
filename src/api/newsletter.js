import { basePath, apiVersion } from './config'

export function suscribeNewsletterApi(email) {
  const url = `${basePath}/${apiVersion}/suscribe-newsletter/${email}`

  const params = {
    method: 'POST',
  }

  return fetch(url, params)
    .then((req) => {
      return req.json()
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err
    })
}
