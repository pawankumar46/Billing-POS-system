import React , {useState} from 'react'

const ProductItem = (props) => {
     const [toggle , setToggle] = useState(false)
     const {_id , name , price } = props

      const handleToggle=()=>{
         setToggle(!toggle)
      }
  return (
    <div>
        {toggle ? (
          <>
          <h4>Edit your product data here</h4>
          <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-trash3-fill"></i></button>
          </>

        ): (
            <div className='my-5 g-4'>
            <h5>Item - {name}</h5>
            <h5>Cost - <i className="fa fa-inr"></i> {price}</h5>
            <button className='btn btn-4'><i className="bi bi-trash3-fill"></i></button>
             <button className='btn btn-4' onClick={handleToggle}><i className="bi bi-pencil-fill"></i></button>
             
            </div>

        )}
       
       

    </div>
  )
}

export default ProductItem