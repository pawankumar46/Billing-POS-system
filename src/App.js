import React , {useEffect, useState} from 'react'
import NavBar from './components/NavBar';

function App(props) {
   const [toggle ,setToggle] = useState(false)

    const handleAuth=()=>{
       setToggle(!toggle)
    }

     useEffect(()=>{
      if ( localStorage.getItem('token')) {
        handleAuth()
      }
       
     },[ ])
     // eslint-disable-next-line
  return (
    
       <div >
       <h2 style={{textAlign : 'center'}}>Billing App</h2>
       <NavBar  toggle={toggle} handleAuth={handleAuth} />
       </div>
      
    
  );
}

export default App;
