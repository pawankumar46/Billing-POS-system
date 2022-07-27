import axios from "axios";
import swal from "sweetalert";

 const token  = localStorage.getItem('token')
export const startPostBill=(data,updateGenerateBill)=>{
    console.log('action' , data)
    return(dispatch)=>{
        axios.post(`http://dct-pos-app.herokuapp.com/api/bills` , data , {
            headers : {
                'Authorization' : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal(result.message)
            } else {
               
                dispatch(billPost(result))
                updateGenerateBill(result)

            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const billPost=(data)=>{
     console.log(data)
    return {
        type : 'BILL_POST',
        payload : data
    }
}

// To get all Bills 

export const startGetBill=()=>{
    return(dispatch)=>{
        axios.get('http://dct-pos-app.herokuapp.com/api/bills' , {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        })
        .then((res)=>{
            const result = res.data
             if(result.hasOwnProperty('errors')){
                alert(result.message)
             } else {
                
                dispatch(getBill(result))
             }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const getBill=(data)=>{
     return {
        type : 'BILL_GET' ,
        payload : data
     }
}

// Remove Bill Items

export const startDelete=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/bills/${id}`, {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        })
        .then((res)=>{
            const result = res.data 
             if(result.hasOwnProperty('errors')){
                 alert(result.message)
             } else {
                 dispatch(deleteBill(id))
             }
        })
        .catch((err)=>err.message)
    }
}

export const deleteBill=(data)=>{
     return {
         type : 'DELETE_BILL',
         payload : data
     }
}