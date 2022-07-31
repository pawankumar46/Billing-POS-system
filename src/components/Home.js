import React from 'react'
 import image from '../images/invoice_billing_feature.png'
const Home = (props) => {
  return (
    <div>
       <div  className='p-5'>
        <h4>
            Hello all !
            Welcome to my shop...
         </h4>
        </div>
         <div className='container'>
         <img src={image} alt='' />
         </div>
    </div>
  )
}

export default Home