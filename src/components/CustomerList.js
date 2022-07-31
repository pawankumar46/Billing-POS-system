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
             <h4  className='text-end px-4 py-2'>Total customers : {customers.length}</h4>
             <div className='row' style={{maxHeight:"400px", overflow:"auto",padding:"20px 10px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
              {customers.map((ele , i)=>{
                
                
                return <CustomerItem key={i}  {...ele}/>
              })}
              </div>
            
            </>
         )}
         
    </div>
  )
}

export default CustomerList