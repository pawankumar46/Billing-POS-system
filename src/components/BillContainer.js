import React from 'react'
import BillForm from './BillForm'
 import { useHistory } from 'react-router-dom'


const BillContainer = (props) => {
      const history = useHistory()

      
     
     
       const handleViewAll=()=>{
          history.push('/bills/all')
       }

    return (
     <div className='row my-5 '>
          <h2>Billing Details</h2>
      <div className='col-md-12 p-3'>
           <div>
            
              <button className='btn rounded-pill border-primary' onClick={handleViewAll}>View All</button>
           </div>
            <BillForm />
          
      </div>
     </div>
    )
}

export default BillContainer