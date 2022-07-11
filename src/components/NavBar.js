import React from 'react'
import {Link , Route, withRouter} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Account from './Account';
import CustomerContainer from './CustomerContainer';
import Products from './Products';
import '../styles.css'

const NavBar = (props) => {
  const {toggle , handleAuth} = props
  return (
    <div>
        <div style={{textAlign : 'center'}} >
           <div className='navbar-font'>
           <Link   to='/'>Home</Link> | 
           {toggle ? (
             <React.Fragment>
              <Link to='/account'>Account</Link> |
              <Link to='/customer'>Customer</Link> | 
              <Link to='/products'>Products</Link> |
              <Link to='/logout' onClick={()=>{
                  localStorage.removeItem('token')
                  alert('successfully logged out')
                   handleAuth()
                   props.history.push('/')
              }}> Logout</Link>

             </React.Fragment>
           ) : (
             <>
              <Link   to='/register'>Register</Link> | 
              <Link   to='/login'>Login</Link>
             </>

           )}
           
           </div>
         

          <Route path='/'  component={Home} exact />
          <Route path='/register' component={Register} />
          <Route  path='/login'  render={(props)=>{
             return <Login {...props} handleAuth={handleAuth} />
          }}  />
          <Route   path='/account' component={Account} />
          <Route   path='/products' component={Products}/>
          <Route  path='/customer' component={CustomerContainer} />
    </div>
    </div>
  )
}

export default withRouter(NavBar)