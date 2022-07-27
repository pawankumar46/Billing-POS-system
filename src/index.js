import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetBill } from './actions/billAction';
import { startGetCust } from './actions/customerAction';
import { startGetProduct } from './actions/productAction';
import { startGetUser } from './actions/userActions';


 const store = configureStore()
  console.log('store' , store.getState())

   store.subscribe(()=>{
      console.log('updated' , store.getState())
   })

   if(localStorage.hasOwnProperty('token')){
      // console.log("token")
      store.dispatch(startGetUser())
      store.dispatch(startGetCust())
      store.dispatch( startGetProduct())
      store.dispatch(startGetBill())
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
     <Provider store={store}>
     <App />
     </Provider>
      
 </BrowserRouter>
   

);


