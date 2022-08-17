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
import swal from 'sweetalert';

const RouteContainer = (props) => {
  const {toggle , handleAuth} = props
  return (
    <div>
        <div style={{textAlign : 'center'}} >
           {/* <nav className='navbar navbar-expand-lg bg-light'>
               <div className='container-fluid'>
                <h2>Billing</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
                 </button>
              
             <div>
           <Link className='Link' to='/'>Home</Link> <span></span>
           {toggle ? (
             <React.Fragment >
              <Link className='Link' to='/account'>Account</Link> <span></span>
              <Link className='Link' to='/customer'>Customer</Link> <span></span>
              <Link className='Link' to='/products'>Products</Link> <span></span>
              <Link className='Link' to='/dashboard'>Dashboard</Link>  <span></span>
              <Link  className='Link'to='/billing'>Billing</Link> <span></span>
              <Link  className='Link'to='/logout' onClick={(e)=>{
                e.preventDefault()
                  localStorage.removeItem('token')
                  alert('successfully logged out')
                   handleAuth()
                   props.history.push('/')
              }}> Logout</Link> <span></span>

             </React.Fragment>
           ) : (
             <>
              <Link className='Link'  to='/register'>Register</Link> <span></span>
              <Link className='Link'  to='/login'>Login</Link>
             </>

           )}
            </div>
             </div>
           </nav> */}
          <nav className="navbar navbar-expand-sm bg-light" >
  <div className="container-fluid">
     <h1>Billing</h1> 
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-auto">
      <li className="nav-item active p-2">
                 <Link className='Link' to="/">Home</Link>
            </li>{
                toggle ?   <>   
                <li className="nav-item p-2">
                <Link className='Link' to='/account'  >Account</Link>
              </li>
              <li className="nav-item p-2">
              <Link className='Link' to="/dashboard" > Dashboard </Link>
              </li>
              <li className="nav-item p-2">
              <Link className='Link' to='/customer' >Customers</Link>
              </li>
              <li className="nav-item p-2">
              <Link className='Link' to='/products'  >Products</Link> 
              </li>
              <li className="nav-item p-2">
              <Link className='Link'to='/billing'   >Billing</Link>
              </li>
              <li className="nav-item p-2">
              <Link className='Link' to='/logout'   onClick={(e) => {
                                  e.preventDefault()
                                localStorage.removeItem('token')
                                swal('Logged out Successfully')
                                handleAuth()
                                props.history.push("/")
                          }}>Logout</Link>
              </li>
              </> :
              <>    
                <li className="nav-item p-2">
                    <Link  className='Link' to="/register"> Register </Link>
                    </li>
                    <li className="nav-item p-2 " >
                    <Link className='Link'  to="/login"> Login </Link>  
                    </li>          
                    </>

            }
   
      </ul>
    </div>
  </div>
</nav>

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

export default withRouter(RouteContainer)