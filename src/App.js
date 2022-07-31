import React , {useEffect, useState} from 'react'
import NavBar from './components/NavBar';
import {useSelector} from 'react-redux'
function App(props) {
   const [toggle ,setToggle] = useState(false)
   const [isLoading , setIsLoading] = useState(true)
    const handleAuth=()=>{
       setToggle(!toggle)
    }
    
    const bills = useSelector((state)=>{
       return state.bill
    })
    const customers = useSelector((state)=>{
      return state.customer
    })
    const  products = useSelector((state)=>{
      return state.product
    })
    const  account = useSelector((state)=>{
      return state.user
    })

     useEffect(()=>{
       if(products.length > 0 && customers.length > 0 && bills.length>0 && Object.keys(account).length>0){
           setIsLoading(false)
       }
     },[customers , products, bills, account])
     
     useEffect(()=>{
      if ( localStorage.getItem('token')) {
        handleAuth()
      }
       
     },[])
     // eslint-disable-next-line
  return (
    
       <div >
          { !isLoading && (
           <>
         <div className='bg-light text-center  p-2'>
         <h2>Billing App</h2>
         </div>
         <hr className='mx-5'/>
       <div>
       <NavBar  toggle={toggle} handleAuth={handleAuth} />
       </div>
       </>
       )}
       </div>
      
    
  );
}

export default App;
