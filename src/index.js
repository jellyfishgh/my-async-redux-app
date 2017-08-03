import {render} from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import app from './GitHub'
// import app from './Reddit'

app(render)
registerServiceWorker()
