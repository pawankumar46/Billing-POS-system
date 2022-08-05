import React from 'react'
import { useSelector } from 'react-redux'
import { startDelete } from '../actions/billAction'
import { useDispatch } from 'react-redux'
const ViewAll = (props) => {
   const dispatch = useDispatch()
      const customer = useSelector((state)=>{
         return state.customer
      })

       const product = useSelector((state)=>{
         return  state.product
       })

       const bill = useSelector((state)=>{
         return  state.bill
       })

        const allCustomerBills=()=>{
           const allBills = bill.map(bill => {
            const customerDetails = customer.filter(cus => {
              return cus._id === bill.customer
            })[0]
            if(customerDetails){
              const newBill = bill.lineItems.map(item => {
                 const details = product.filter(prod => prod._id=== item.product)[0]
                 return {
                   quantity : item.quantity,
                   subTotal : item.subTotal,
                   ...details
                 } 
              })
              return {
                customerName: customerDetails.name,
                billId: bill._id,
                products: newBill,
                total: bill.total
              }
              } else {
              return {error:'Not Found'}
          }
           })
           return allBills.filter(bill => !bill.error).flat()
        }

        const handleRemove=(id)=>{
          const confirm = window.confirm('Are you sure')
          if(confirm){
              dispatch(startDelete(id))
          }
      }

      const currentProductDetails = allCustomerBills()
  return (
    <div className='row'>
       <div>
         <div className='col-md-12'>
           <div className='row'>
      {
        currentProductDetails.map((ele, index) => {
          return (
            
              <div className='col-sm-4 p-5 m-2'>
               <div className='shadow p-3 mb-3 bg-white'>
              <div  key={index}>
                 <div>
                         <h4>Customer - {ele.customerName}</h4>
                             {ele.products.map((item, ind) => {
                              return (
                                <div key={ind}>
                                  <li >{`${item.name} - ${item.quantity} - ${item.subTotal}`}</li>
                                 </div> 
                              )
                          })}
                    
                  <h5>Total - <i className="fa fa-inr"></i>{ele.total}</h5>
                   
                    <button className="btn btn-4" onClick={() => {handleRemove(ele.billId)}}>X</button>
                   
                 </div> 
              </div>
              </div>
             </div>
              
          )
      })
      }
      </div>
       </div>
      </div>
    </div>
  )
}

export default ViewAll