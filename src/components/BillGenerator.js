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

 const gst = Number (new Date()) 
  
  const handleBack=()=>{
     history.push('/billing')
  }
  return (
     <div className='text-center'>
         <div className='m-5 w-80 rounded overflow-hidden shadow-lg p-4'>
         <div className='card'>
           <div  className='card-body' ref={ref}>
               <h3 className='card-title'>{customer.name}</h3>
                 <p>{gst}</p>
               {
                billProducts.map((item,i)=>{
                   return (
                     <div key={i}>
                       <li><h6 className='card-text'>Product  - {item.name} <br/> SubTotal - {item.subTotal}</h6></li> 
                     </div>
                   )
                })
               }
               <p className='card-text'>Total - {bill.total}</p>
           </div>
           </div>
           </div>
             <div>
             <ReactToPdf targetRef={ref} filename="Bill.pdf">
             {({toPdf})=>
                <button type='button' className='btn btn-4' onClick={toPdf}>Download</button>
             }

              </ReactToPdf>
             </div>
            <button className='btn btn-4' onClick={handleBack}><i className="bi bi-backspace"></i></button>
     </div>
  )
}

export default BillGenerator



