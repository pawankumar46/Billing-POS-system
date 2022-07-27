import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteCus } from '../actions/customerAction'
import EditCustomer from './EditCustomer'

const CustomerItem = (props) => {
   const [toggle , setToggle] = useState()

    const handleToggle=()=>{
       setToggle(!toggle)
    }
     const {_id , name , mobile , email} = props

     const dispatch = useDispatch()
       

     const handleRemove=()=>{
        const confirm = window.confirm(`Are You Sure.. ?`)
         if(confirm){
           dispatch(startDeleteCus(_id))
         }
     }
    
  return (
    <div>
    <div>
          {toggle  ?  (
            <>
           <EditCustomer  
            _id={_id} name={name} mobile={mobile} handleToggle={handleToggle} email={email}/>
           <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-trash3-fill"></i></button>
           </>
) : (
  <div>
    <React.Fragment>
         
  <h5>Name - {name}</h5>
  <p>Mobile -{mobile}</p>
  <p>{email}</p>
  <button className='btn btn-4-danger' onClick={()=>{
     handleRemove(_id)
  }}><i className="bi bi-trash3-fill"></i></button>
  <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button>
  
  </React.Fragment>
</div>
)}
    </div>
    
   
    </div>
  )
}

export default CustomerItem