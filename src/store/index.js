import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import reducer from './reducer'
import reducer1 from './reducer1'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancer = window.__REDUX_DEVTOOLSEXTENSION_COMPOSE__?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))

var comboReducers = combineReducers({
    todoList:reducer,
    secondInput:reducer1
})

const store = createStore(
    comboReducers,
    enhancer
)
sagaMiddleware.run(mySagas)
export default store