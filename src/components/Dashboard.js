import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = (props) => {

    const customers = useSelector((state)=>{
         return state.customer
    })
 
     const products = useSelector((state)=>{
         return  state.product
     })
  return (
    <div className='row p-5'>
        <div className='col-md-6'>
            <h2>Total Customer = {customers.length}</h2>
              {customers.map((ele,i)=>{
                return <h4 key={i} className='my-5'>{ele.name}</h4>
              })}
        </div>
        <div className='col-md-6'>
            <h2>Total Products = {products.length}</h2>
            {products.map((ele,i)=>{
                return <h4 key={i} className='my-5'>{ele.name}</h4>
            })}
        </div>
    </div>
  )
}

export default Dashboard