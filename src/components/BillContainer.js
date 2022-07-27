import React ,{useState} from 'react'
import BillForm from './BillForm'
import BillGenerator from './BillGenerator'


const BillContainer = (props) => {
     const [newBill  , setNewBill] = useState('')

      const  updateGenerateBill=(data)=>{
          setNewBill(data)
      }
     
       const handleGenerateBill=()=>{
         setNewBill('')
       }

       const handleViewAll=()=>{
         setNewBill('All')
       }

    return (
     <div className='row my-5 '>
          <h2>Billing Details</h2>
      <div className='col-md-12 p-3'>
           <div>
              <button className='btn rounded-pill border-primary' onClick={handleGenerateBill}>Generate New</button>
              <button className='btn rounded-pill border-primary' onClick={handleViewAll}>View All</button>
           </div>
            {newBill ? <BillGenerator newBill={newBill} /> : <BillForm updateGenerateBill={updateGenerateBill} />}
          
      </div>
     </div>
    )
}

export default BillContainer