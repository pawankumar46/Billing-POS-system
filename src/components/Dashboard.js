import React from 'react'
import { useSelector } from 'react-redux'
import Chart from 'react-google-charts'
const Dashboard = (props) => {

    const customers = useSelector((state)=>{
         return state.customer
    })
 
     const products = useSelector((state)=>{
         return  state.product
     })
     const bills = useSelector((state)=>{
           return state.bill
     })
      const data = [
        ['Total Expenditure', 'Total'], 
        ['Customers' , customers.length ] ,
        ['Products' , products.length] ,
        ['Bills' , bills.length]
      ]
       const options = {
        title: "Total Expenditure",
        pieHole: 0.2,
        is3D: false,
      }
  return (
    <div className='row p-5'>
        <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    /> 
        <div className='col-md-6'>
           <div>
            <div className='shadow-lg p-3 mb-5 bg-light rounded'>
            <h2>Total Customer = {customers.length}</h2>
              {customers.map((ele,i)=>{
                return <li key={i} className='my-5'>{ele.name}</li>
              })}
            </div>
          
           </div>
           
        </div>
        <div className='col-md-6'>
          <div className='shadow-lg p-3 mb-5 bg-light rounded'>
          <h2>Total Products = {products.length}</h2>
            {products.map((ele,i)=>{
                return <li key={i} className='my-5'>{ele.name}</li>
            })}
          </div>
            
        </div>
       
    </div>
  )
}

export default Dashboard