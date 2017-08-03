import {combineReducers} from 'redux'

import postsByReddit from './postsByReddit'
import selectedReddit from './selectedReddit'

export default combineReducers({postsByReddit, selectedReddit})
