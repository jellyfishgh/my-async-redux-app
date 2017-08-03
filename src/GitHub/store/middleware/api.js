import {normalize, schema} from 'normalizr'
import {camelizeKeys} from 'humps'

const getNextPageUrl = response => {
  const link = response
    .headers
    .get('link')
  if (!link) {
    return null
  }

  const nextLink = link
    .split(',')
    .find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }

  return nextLink
    .split(';')[0]
    .slice(1, -1)
}
