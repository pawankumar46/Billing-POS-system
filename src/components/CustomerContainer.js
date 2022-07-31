import React from 'react'
import Customer from './Customer'
import CustomerList from './CustomerList'
const CustomerContainer = (props) => {
  return (
    <div className='row' style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <h2> Customer Dashboard </h2>
        <div className='col-md-4'>
        <div className='p-5'>
        <Customer />
        </div>
        </div>
       

        <div className='col-md-8'>

          <div className=' row'>
            
            <CustomerList/>
          
          </div>
        </div>
       
    </div>
  )
}

export default CustomerContainer