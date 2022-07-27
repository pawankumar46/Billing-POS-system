import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
 import ReactToPdf  from 'react-to-pdf'
import { startDelete } from '../actions/billAction'

 
const BillGenerator = (props) => {
   const  ref = React.createRef()
  const dispatch = useDispatch()
     
  const {newBill} = props

  const bills = useSelector((state)=>{                   // Bills
    return   state.bill
 })


  const products = useSelector((state)=>{
    return  state.product                               //  Products 
})
 


const customers = useSelector((state)=>{                // Customers
   return   state.customer
})


// useEffect(()=>{
//   const customer = customers.filter((ele)=>{ 
//     console.log("check1",ele._id )
//     console.log("check2",bills[0].customer)
//     console.log("inside")
//     console.log("check3",ele._id === bills[0].customer)
//     return ele._id === bills[0].customer
//   })[0]
//   setCustomer(customer)
// },[])
// console.log("outside")
// console.log("customer",customers)

const  customer = customers.filter(ele=>
   ele._id === newBill.customer
)[0]
 


 const singleCustomerBill=()=>{                                                         //  for single customer after the generate 
    const currentBills = bills.filter(ele => ele.customer === newBill.customer)
     return  currentBills.map(bil=> {
        const newBills = bil.lineItems.map(item => {
          const details = products.filter(prod=> prod._id === item.product)[0]
          return {quantity : item.quantity, subTotal : item.subTotal , ...details}
        })
        return {
          customerName : customer.name,
          billId       : bil._id,
          products     : newBills,
          total        : bil.total
        }
     })
 }
      
 const  allCustomers=()=>{
    const  allBills= bills.map(bill => {
      const customerDetails = customers.filter(ele => {
        return ele._id === bill.customer
      })[0]
       if(customerDetails){
         const newBills = bill.lineItems.map(item =>{
           const details = products.filter(ele => ele._id === item.product)[0]
            return {quantity : item.quantity, subTotal : item.subTotal , ...details}
         })
          return {
            customerName:customerDetails.name,
            billId :bill._id,
            products : newBills,
            total: bill.total
          }
       } else {
           return {error : 'not found'}
       }
    })
     return allBills.filter(bill => !bill.error).flat()
 }
 
   const handleBillRemove=(id)=>{                        // To Remove bill list
     const confirm = window.confirm('Are you sure..?')
       if(confirm){
        dispatch(startDelete(id))
       }
     }
     
     
   const currentProductDetails  = newBill === "All" ? allCustomers()  : singleCustomerBill()




  return (
    <div className='my-3'>
    <div className='text-center' ref={ref} > 
          {currentProductDetails.map((ele, index)=>{
             return (
               <div key={index}>
                    <div>
                    <h3>Customer Name = {ele.customerName}</h3>
                    </div>
                    <div>
                      
                        {ele.products.map((item, i)=>{
                           return (
                            <>
                            <li> <strong key={i}>
                             {` Product=${item.name} 
                             Quantity=${item.quantity}  
                             Cost=${item.subTotal}`  }
                             </strong> </li>
                            
                            </>
                            
                           )
                        })}
                      
                    </div> 
                    <div>
                      <h4>Total--{ele.total}</h4>
                    </div>
                    <div>
                    {newBill === 'All' && <button onClick={() => {handleBillRemove(ele.billId)}}>X</button>}
                    </div>
               </div>
               
             )
          })}
   </div>
           
            <ReactToPdf targetRef={ref} filename="Bill.pdf">
             {({toPdf})=>
                <button type='button' onClick={toPdf}>Download</button>
             }  
            </ReactToPdf> 
    
   
   </div>
  )
   
   
 
}

export default BillGenerator



