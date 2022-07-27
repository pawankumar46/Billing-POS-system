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

          <div className='flex'>
            <div className='col-lg-12'>
            <CustomerList/>
            </div>
          
          </div>
        </div>
       
    </div>
  )
}

export default CustomerContainer