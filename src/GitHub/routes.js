import RepoPage from './containers/RepoPage'
import UserPage from './containers/UserPage'

export default[
  {
    path : '/:login/:name',
    component : RepoPage
  }, {
    path : '/:login',
    component : UserPage
  }
]
