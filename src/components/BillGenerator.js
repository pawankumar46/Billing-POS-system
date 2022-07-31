import React  from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
 import ReactToPdf  from 'react-to-pdf'

import { useHistory } from 'react-router-dom'
 
const BillGenerator = (props) => {
   const  ref = React.createRef()
  
 const params = useParams()
 const history = useHistory()
   
  const bill = useSelector((state)=>{
      return state.bill.filter(bil => bil._id === params.billId)[0]
  })
  const customer  = useSelector((state)=>{
    return state.customer.filter(cus => cus._id === bill.customer)[0]
})
const products = useSelector((state)=>{
    return state.product
})

const billProducts = bill?.lineItems.map(item =>{
   const result = products.filter(prod => prod._id === item.product)[0]
   result.quantity = item.quantity 
   result.subTotal = item.subTotal
   return result
  }) 
  
  const handleBack=()=>{
     history.push('/billing')
  }
  return (
     <div>
           <div  ref={ref}>
               <h3>{customer.name}</h3>
               {
                billProducts.map((item,i)=>{
                   return (
                     <div key={i}>
                        <h6>Product  - {item.name} <span>  </span>
                            SubTotal  - {item.subTotal}</h6>
                     </div>
                   )
                })
               }
               <p>Total - {bill.total}</p>
           </div>
            <button onClick={handleBack}>back</button>
     </div>
  )
}

export default BillGenerator



