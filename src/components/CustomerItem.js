import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { startDeleteCus } from '../actions/customerAction'
import EditCustomer from './EditCustomer'
import '../styles.css'

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
        //const confirm = window.confirm(`Are You Sure.. ?`)
         
     }
    
  return (
        <div className='col-sm-4'>
                            {toggle  ?  (
                              <>
                            <EditCustomer  
                              _id={_id} name={name} mobile={mobile} handleToggle={handleToggle} email={email}/>
                            <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-x-square"></i></button>
                            </>
                  ) : (
                    <div>
                        
                            <div className='shadow p-3 mb-3 bg-white'> 
                                              <h3>{name}</h3>
                                              <h5>{mobile}</h5>
                                              <p>{email}</p>
                                              <div className='card-info'>
                                                 <div >
                                                 <p><button className='btn btn-4-danger' onClick={()=>{
                                                  handleRemove(_id)
                                                }}><i className="bi bi-trash3-fill"></i></button></p>
                                                 </div>
                                                 <div >
                                                 <p><button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button></p>
                                                 </div>
                                              </div>

                                             
                                               
                            </div>          
                  </div>
                  
                  )}

                      </div>
     
           
   
 
    


  )
 }

export default CustomerItem