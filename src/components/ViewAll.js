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
    <div>
      {
        currentProductDetails.map((ele, index) => {
          return (
              <div key={index}>
                  <div>
                      <h4>Customer - {ele.customerName}</h4>
                  </div>
                  <div>
                      
                          {ele.products.map((item, ind) => {
                              return (
                                  <li key={ind}>{`${item.name} - ${item.quantity} - ${item.subTotal}`}</li>
                              )
                          })}
                     
                          
                  </div>
                  <h4>Total-{ele.total}</h4>
                   <div>
           <button   className="btn btn-danger btn-4" onClick={() => {handleRemove(ele.billId)}}>X</button>
                  </div> 
                  
              </div>
          )
      })
      }
    </div>
  )
}

export default ViewAll