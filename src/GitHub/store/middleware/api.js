import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'

const getNextPageUrl = response => {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }
  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }
  return nextLink.split(';')[0].slice(1, -1)
}

const API_ROOT = 'https://api.github.com/'

const callApi = (endpoint, schema) => {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      console.log(response)
      if (!response.ok) {
        return Promise.reject(json)
      }
      const camelizedJson = camelizeKeys(json)
      const nextPageUrl = getNextPageUrl(response)
      return Object.assign({}, normalize(camelizedJson, schema), {
        nextPageUrl
      })
    })
  )
}

const userSchema = new schema.Entity(
  'users',
  {},
  {
    idAttribute: user => user.login.toLowerCase()
  }
)

const repoSchema = new schema.Entity(
  'repos',
  {
    owner: userSchema
  },
  {
    idAttribute: repo => repo.fullName.toLowerCase()
  }
)

export const Schemas = {
  USER: userSchema,
  USER_ARRAY: [userSchema],
  REPO: repoSchema,
  REPO_ARRAY: [repoSchema]
}

export const CALL_API = 'Call API'

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { endpoint } = callAPI
  const { schema, types } = callAPI
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }
  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))
  return callApi(endpoint, schema).then(
    response => next(actionWith({ response, type: successType })),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        })
      )
  )
}
