import axios from 'axios'

const token = localStorage.getItem('token')

// Adding products 

export const startPostProduct=(data)=>{
    return(dispatch)=>{
        axios.post(`http://dct-pos-app.herokuapp.com/api/products` , data , {
            headers : {
                'Authorization' : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
             if(result.hasOwnProperty('errors')){
                alert(result.message)
             } else {
                dispatch(productAdd(result))
             }
        })
        .catch((err)=>{
             alert(err.message)
        })
    }
}

export const  productAdd=(data)=>{
       return {
        type : 'ADD_PRODUCT',
        payload : data
       }
}

// Get Products details

export const  startGetProduct=()=>{
    return(dispatch)=>{
    axios.get(`http://dct-pos-app.herokuapp.com/api/products` , {
        headers : {
            'Authorization' : `Bearer ` + token
        }
    })
    .then((res)=>{
        const result = res.data
        if(result.hasOwnProperty('errors')){
            alert(result.message)
        } else {
            dispatch(getProduct(result))
        }
    })
    .catch((err)=>{
        alert(err.message)
    })
    }
}

export const getProduct=(data)=>{
    return {
        type : 'GET_PRODUCT' ,
        payload : data
    }
}

// Delete Products

export const startDeleteProduct=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/products/${id}` ,{
            headers : {
                'Authorization' : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if (result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(deleteProduct(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const deleteProduct=(data)=>{
     return {
        type : 'DELETE_PRODUCT',
        payload : data
     }
}

// Editing / Update Products

export const startEditProduct=(data , id)=>{
    return(dispatch)=>{
        axios.put(`http://dct-pos-app.herokuapp.com/api/products/${id}` , data , {
            headers : {
                'Authorization' : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(editProducts(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const editProducts=(data)=>{
    return {
        type : 'EDIT_PRODUCTS',
        payload : data
    }
}