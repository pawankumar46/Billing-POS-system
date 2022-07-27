import React from 'react'
import { useEffect } from 'react'
 import { useDispatch , useSelector } from 'react-redux'
import { startGetCust } from '../actions/customerAction'
import CustomerItem from './CustomerItem'

 
const CustomerList = (props) => {
    const dispatch= useDispatch()

   //  useEffect(()=>{
   //      dispatch(startGetCust())
   //  },[dispatch])
 
    const customers = useSelector((state)=>{
         return  state.customer
    })


  return (
    <div >
         {customers.length === 0  ? (
            <>
            <h4>
         No Customers Found
         </h4>
         <p>
            Add Your New Customer
         </p>
            </>
         ): (
            <>
             <h4>Total customers = {customers.length}</h4>
              {customers.map((ele , i)=>{
                
                
                return <CustomerItem key={i}  {...ele}/>
              })}
            
            </>
         )}
         
    </div>
  )
}

export default CustomerList