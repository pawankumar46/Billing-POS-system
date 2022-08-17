import React from 'react'
 import image from '../images/invoice_billing_feature.png'
 import register from '../images/Register.PNG'
 import '../styles.css'
const Home = (props) => {
  return (
    <div>
       <div  className='p-5'>
        <h4>
            Hello all !
            Welcome to my shop...
         </h4>
         </div>
         {/* <div>
           <p>User can Register and Login to his app</p>
           <p>Once the user is logged in, they can add Customers and inventory Products</p>
           <p>Based on Customer's products bill is generated </p>
            </div>
            <div className='card-info'>
              <div className=''>
              <h3>Authentication is provided here</h3>
               <h4>Guidelines in Registration form</h4>
             <h6>User must register first to login </h6>
               <div className='p-5 my-3'>
               <p>User-Name must be provided</p>
               <p>Email, Password, User's Business-Name is provided </p>
               </div>
               
               
             </div>
             <div>
             <img src={register} alt="" />
             </div>
            
            </div> */}
         <div className='container'>
         <img src={image} alt='' />
         </div>
    </div>
  )
}

export default Home