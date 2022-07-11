import axios from "axios";
 
const token = localStorage.getItem('token')
export const startPostCust=(data)=>{
    return(dispatch)=>{
        axios.post(`http://dct-pos-app.herokuapp.com/api/customers` , data  , {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(postCustomer(data))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
         
    }
}

export const postCustomer=(data)=>{
    return {
        type : 'POST_CUS' ,
        payload : data
    }
}


// Customer Get method

export const startGetCust=()=>{
    return(dispatch)=>{
        axios.get(`http://dct-pos-app.herokuapp.com/api/customers` , {
            headers : {
                'Authorization' : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                 dispatch(getCus(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const getCus=(data)=>{
    return {
        type : 'GET_CUS',
        payload : data
    }
}

// To Delete Customer

export const startDeleteCus=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/customers/${id}`, {
            headers : {
                'Authorization' : ` Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else{
                dispatch(deleteCus(id))
            }
          })
          .catch((err)=>{
            alert(err.message)
          })
    }
}

export const deleteCus=(id)=>{
    return {
        type : 'DELETE_CUS' ,
        payload : id
    }
}