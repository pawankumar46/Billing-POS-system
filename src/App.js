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
       
     },[])
     // eslint-disable-next-line
  return (
    
       <div >
         <div className='bg-light text-center  p-2'>
         <h2>Billing App</h2>
         </div>
         <hr className='mx-5'/>
       <div>
       <NavBar  toggle={toggle} handleAuth={handleAuth} />
       </div>
       
       </div>
      
    
  );
}

export default App;
