import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteProduct } from '../actions/productAction'
import EditProduct from './EditProduct'

const ProductItem = (props) => {
     const [toggle , setToggle] = useState(false)
     const {_id , name , price } = props

      const dispatch = useDispatch()
      const handleToggle=()=>{
         setToggle(!toggle)
      }
    
      const handleRemove =()=>{
         const confirm = window.confirm(`Are You Sure..?`)
          if (confirm){
             dispatch(startDeleteProduct(_id))
          }
      }

  return (
    <div className='col-sm-4'>
        {toggle ? (
          <>
           <EditProduct 
            _id={_id} name={name} price={price} handleToggle={handleToggle}/>
          <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-trash3-fill"></i></button>
          </>

        ): (

            <div  className='shadow p-3 mb-3 bg-white'> 
               
                     
                    
                          
                              <h5>Item - {name}</h5>
                              <h6>Cost - <i className="fa fa-inr"></i> {price}</h6>
                               <div className='start'>  <p> <button className='btn btn-4' onClick={()=>{
                                    handleRemove(_id)
                                 }}><i className="bi bi-trash3-fill"></i></button> </p> </div>
                                <div className='end'> 
                                <p> <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button></p>
                                  </div>
                                
                     
                
            {/* <div className='my-5'>
            <h5>Item - {name}</h5>
            <h5>Cost - <i className="fa fa-inr"></i> {price}</h5>
            <button className='btn btn-4' onClick={()=>{
               handleRemove(_id)
            }}><i className="bi bi-trash3-fill"></i></button>
             <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button>
             
            </div> */}

            </div>

        )}
       
       

    </div>
  )
}

export default ProductItem