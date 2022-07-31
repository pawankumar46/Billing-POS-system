import React from 'react'
import {Link , Route, withRouter} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Account from './Account';
import CustomerContainer from './CustomerContainer';
import ProductContainer from './ProductContainer';
import BillGenerator from './BillGenerator';
import ViewAll from './ViewAll';

import Dashboard from './Dashboard';

import '../styles.css'
import BillContainer from './BillContainer';

const NavBar = (props) => {
  const {toggle , handleAuth} = props
  return (
    <div>
        <div style={{textAlign : 'center'}} >
           <div className='navbar-font bg-light p-5'>
           <Link   to='/'>Home</Link> <span></span>
           {toggle ? (
             <React.Fragment>
              <Link to='/account'>Account</Link> <span></span>
              <Link to='/customer'>Customer</Link> <span></span>
              <Link to='/products'>Products</Link> <span></span>
              <Link to='/dashboard'>Dashboard</Link>  <span></span>
              <Link to='/billing'>Billing</Link> <span></span>
              <Link to='/logout' onClick={(e)=>{
                e.preventDefault()
                  localStorage.removeItem('token')
                  alert('successfully logged out')
                   handleAuth()
                   props.history.push('/')
              }}> Logout</Link> <span></span>

             </React.Fragment>
           ) : (
             <>
              <Link   to='/register'>Register</Link> <span></span>
              <Link   to='/login'>Login</Link>
             </>

           )}
           
           </div>
         

          <Route path='/'  component={Home} exact />
          <Route path='/register' component={Register} />
          <Route  path='/login'  render={(props)=>{
             return <Login {...props} handleAuth={handleAuth} />
          }}  />
          <Route   path='/account' component={Account} exact />
          <Route   path='/products' component={ProductContainer} exact/>
          <Route  path='/customer' component={CustomerContainer} exact />
          <Route  path='/billing' component={BillContainer}exact />
           <Route  path='/dashboard' component={Dashboard} exact/>
           <Route   path ='/billing/:billId' component={BillGenerator}exact/>
           <Route   path="/bills/all" component={ViewAll} exact/>
    </div>
    </div>
  )
}

export default withRouter(NavBar)