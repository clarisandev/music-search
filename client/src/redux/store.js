import {createStore, applyMiddleware} from 'redux'
import './reducers/rootReducer'
import thunk from 'redux-thunk'
import rootReducers from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducers,composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store