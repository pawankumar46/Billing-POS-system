import React , {useEffect, useState} from 'react'
import RouteContainer from './components/RouteContainer';
import {useDispatch} from 'react-redux'
import {asyncInitialUserDetailsFetch} from './actions/userActions'

function App(props) {
   const [toggle ,setToggle] = useState(false)
   const [isLoading , setIsLoading] = useState(true)
   
    
    // const bills = useSelector((state)=>{
    //    return state.bill
    // })
    // const customers = useSelector((state)=>{
    //   return state.customer
    // })
    // const  products = useSelector((state)=>{
    //   return state.product
    // })
    // const  account = useSelector((state)=>{
    //   return state.user
    // })
 
      const isTokenFound = localStorage.hasOwnProperty('token')

      const handleAuth=()=>{
        setToggle(!toggle)
     } 

     const dispatch = useDispatch()
            useEffect(()=>{
              if(isTokenFound){
                dispatch(asyncInitialUserDetailsFetch(setIsLoading))
              } else {
                setIsLoading(!isLoading)
              }
            },[setIsLoading])

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
         <h3>Customer POS System</h3>
         </div>
          <hr style={{width : '800px' , margin : 'auto'}}/>
       <div>
       <RouteContainer  toggle={toggle} handleAuth={handleAuth} />
       </div>
       </>
       )}
       </div>
      
    
  );
}

export default App;
