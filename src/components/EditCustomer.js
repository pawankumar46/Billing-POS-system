import React from 'react'
import Customer from './Customer'

const EditCustomer = (props) => {
  const {_id , name , mobile , handleToggle , email} = props
  return (
    <div>
       <Customer 
       _id={_id}
        name={name}
        email={email}
       mobile={mobile}
       handleToggle={handleToggle}  />
    </div>
  )
}

export default EditCustomer