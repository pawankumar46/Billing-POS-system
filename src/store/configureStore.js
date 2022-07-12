 import {createStore , combineReducers , applyMiddleware} from 'redux'
 import  thunk from 'redux-thunk'
 import userReducer from '../reducers/userReducer'
 import customerReducer from '../reducers/customerReducer'
 import productReducer from '../reducers/productReducer'
 const configureStore=()=>{

    const store = createStore(combineReducers({
         user : userReducer,
         customer : customerReducer,
         product : productReducer
    }),applyMiddleware(thunk))
    return store
 }

 export default configureStore