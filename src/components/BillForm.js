import React , {useState} from 'react'
import swal from 'sweetalert'
import {useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { startPostBill } from '../actions/billAction'
import { useHistory } from 'react-router-dom'




const BillForm = (props) => {
   const dispatch = useDispatch()
    const history = useHistory()
    const {updateGenerateBill} =props
   
     const [formFields , setFormFields] = useState([
         { product : '' ,   quantity : ''} 
     ])
     
    const cusId = useSelector((state)=>{
        return    state.customer
         
   })
   //console.log("cusId" , cusId)


    const prodId = useSelector((state)=>{
         return   state.product
    })

    // const dispatch = useDispatch()
    // const redirect =()=>{
    //   history.push('/generateBill')
    // }

    const redirect =(billId) =>{
      history.push(`/billing/${billId}`) 
    }
    
   const formik = useFormik({
        initialValues : {
             date : '',
             customer : ''
             
        },
        onSubmit : (formData , {resetForm})=>{
          console.log("line",formData)
            // console.log({...formData,LineItems:formFields})
          dispatch(startPostBill({...formData,lineItems:formFields} ,redirect))
            //  console.log("formdata" , formData)
            //  console.log('form' , formFields)
             
        }
     })
     const handleFormChange=(event , index)=>{
            event.preventDefault()
          let data = [...formFields]
          data[index][event.target.name] = event.target.value 
           setFormFields(data)
       }

        const addFields=()=>{
              let object = {
                 product : '',
                  quantity : ''
              }
            setFormFields([...formFields,object])
        }
       // console.log(formFields)

        const removeItems=(index)=>{
           let data=[...formFields]
           data.splice(index,1)
           setFormFields(data)
        }
       
       
      
return (
  <div  className='form-floating'>
      
      <form  onSubmit={formik.handleSubmit}  >
        <label>Date</label> <br/>
        <input type='date' value={formik.values.date} name='date' onChange={formik.handleChange} /> <br/><br/>

        <label>Customer</label> <br/>
       <select onChange={formik.handleChange} name='customer' id='customer'>
        <option  >Select Customer Id</option>
            
          {cusId.map((ele, i)=>{
              return <option  value={ele._id} key={i}>{ele.name}</option>
          })}
       </select><br/><br/>
         
         <div>
           {/* Dynamic form input  */}

           {formFields.map((form,index)=>{
              return (
                <div key={index}>
                <select   name='product'  onChange={event=> handleFormChange(event , index)}>
                    <option value=''> Products</option>
                   {prodId.map((ele ,i)=>{
                    //  console.log(ele._id)
                     return <option key={ele._id} value={ele._id}>{ele.name}</option>
                   })}
                </select> <span> </span>
   
                <input name='quantity' placeholder='quantity'
                onChange={event=> handleFormChange(event , index)} value={form.quantity}/> 

                {formFields.length > 1 &&  < button type='button'onClick={()=>{removeItems(index)}}>Delete</button>}
               </div>
               
             )
             })}
             
            <button className='btn rounded-pill border-primary' type='button' onClick={addFields} ><i className="bi bi-plus-circle"></i></button>

         </div>
             <input type='submit'  className='btn rounded-pill border-primary' value='Generate' />
        
            
            
       

       </form>
        <hr/>
     
         
       
  </div>
)
}


export default BillForm


 {/* <label>Product Id</label> <br/>
       <select onChange={formik.handleChange} name='LineItems.product'>
        <option >Select Product Id</option>
          {prodId.map((ele, i)=>{
              return (<option value={ele._id} key={i}>{ele.name}</option>)
          })}
       </select><br/><br/>

       <label>Quantity</label> <br/>
       <input type='text' value={formik.values.quantity} name='LineItems.quantity' onChange={formik.handleChange}/> <br/><br/>  
       */}