import React from 'react'
import Customer from './Customer'
import CustomerList from './CustomerList'
const CustomerContainer = (props) => {
  return (
    <div className='row '>
        <h2 className='p-5'> Customer Dashboard </h2>
        <div className='col-md-4'>
        <>
        <Customer />
        </>
        </div>
       

        <div className='col-md-8'>
        <>
        <CustomerList/>
        </>

         </div>
       
    </div>
  )
}

export default CustomerContainer