import React from 'react'
import Products from './Products'

const EditProduct = (props) => {
    const {_id , name , price , handleToggle}  = props
  return (
    <div>
      <Products  _id={_id} name={name} price={price}  handleToggle={handleToggle} />
    </div>
  )
}

export default EditProduct