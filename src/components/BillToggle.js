// code which was written before

 {/* <div className='p-5'>
         {bill.map((ele, index)=>{
      //     console.log(ele.customer)
          
          
           return (
              <div key={index} className='border w-50'>
                   {ele.customer === cusId && (
                     <div>
                      {customer.map((ele , ind)=>{
                        return <div key={ind} >
                          <h4>Customer = {ele.name}</h4>
                        </div>
                        
                      })}
                     </div>
                   )}
                    <div>
                   {ele.lineItems.map((ele)=>{
                     return ele.product === proId
                   }) && (
                    <>
                    {product.map((ele)=>{
                       return <h5 key={ele._id}> Items={ele.name}</h5>
                    })}
                    </>
                   ) } </div>
                   <h6> total = {ele.total}</h6>
                <button  className='btn btn-4' onClick={()=>{
                   handleBillRemove(ele._id)
                }}>x</button>
                <button className='btn btn-4'>Download</button>
              </div>
           ) 
         })}
         <div className='button'>
             <button className='btn btn-4' onClick={handleBillBack} ><i className="bi bi-skip-backward-btn-fill"></i></button>
          </div>
        
        </div>  */}



         // <div>
         {/* <div className='p-5'>
         {
         bill.filter(item => item.customer === bill[0].customer).map((ele, index)=>{
     
           return (
              <div key={index} className='border w-50'>

              <div>
              <h4>Customer = {customer.name}</h4>
              </div>
              <div>
              {item.lineItems.map((ele,ind) =>{
                return ( 
                  const product  = products.find(item => item._id === ele.product)

                )
              })}
              </div> */}
                   {/* {ele.customer === cusId && (
                     <div>
                      {customers.map((ele , ind)=>{
                        return <div key={ind} >
                          <h4>Customer = {ele.name}</h4>
                        </div>
                        
                      })}
                     </div>
                   )}
                    <div>
                   {ele.lineItems.map((ele)=>{
                     return ele.product === proId
                   }) && (
                    <>
                    {products.map((ele)=>{
                       return <h5 key={ele._id}> Items={ele.name}</h5>
                    })}
                    </>
                   ) } </div>
                   <h6> total = {ele.total}</h6>
                <button  className='btn btn-4' onClick={()=>{
                   handleBillRemove(ele._id)
                }}>x</button>
                <button className='btn btn-4'>Download</button> */}
              {/* </div>
           ) 
         })} */}
     {/* </div> */}
        
      

     {/*  Button for Coming back to billing   */}
  //    <div className='button'>
  //    <button className='btn btn-4' onClick={handleBillBack} ><i className="bi bi-skip-backward-btn-fill"></i></button>
  // </div>
//  </div>

// const newBills = JSON.parse((bill))
// console.log(newBills)
// const currentBills = newBills.filter(item => item.customer === customer._id)
// console.log("currentBills",currentBills)
// const currentProductDetails = currentBills.map(bil =>{
//   const  newBill = bil.lineItems.map(item =>{
//     const details = products.filter(prod => prod._id === item.product)[0]
//     return {quantity:item.quantity,...details}
//     })
  
//   return {
//     billId:bil._id,
//     products : newBill
//   }
// })
// console.log("method",currentProductDetails)
