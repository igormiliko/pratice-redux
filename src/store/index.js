import { createStore } from 'redux'

import rootReducer from './modules/rootReducer.js'

const store = createStore(rootReducer)

export default store